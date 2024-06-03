import * as React from 'react'
import { useGunEditor } from '~/app/contexts'

import { CssSize, GunPart, Hardpoint } from '~/types'
import {
  compileSize,
  entriesOf,
  getPositionWithParent,
  getRootPosition,
  px,
} from '~/utils'

import { ContextualMenu } from './contextual-menu'

const formatHardpoints = (hardpoints: Record<string, Hardpoint>) =>
  JSON.stringify(
    entriesOf(hardpoints)
      .reduce((acc, [key, entry]) => ({
        ...acc,
        [key]: {
          ...entry,
          part: null,
        }
      }), {})
  )

const isCompatible = (p1: GunPart, p2: GunPart) => {

  // Mandatory typeguard
  // TODO - Check for 1-level of object equality
  if (p1.hardpoints && p2.hardpoints) {
    return formatHardpoints(p1.hardpoints) === formatHardpoints(p2.hardpoints)
  }

  return false
}

type PropsBase = {
  xray: boolean
  hardpoint: Hardpoint
  canvasHeight: CssSize<'px'>
  canvasWidth: CssSize<'px'>
  patchGun: (coreHardpoint: Hardpoint) => void
}

type PropsWithParent = PropsBase & {
  parent: Hardpoint
  parentTop: CssSize<'px'>
  parentLeft: CssSize<'px'>
  hardpointKey: string
  patchParent: (newHardpoint: Hardpoint) => void
}

type PropsWithoutParent = PropsBase & {
  parent?: undefined
  parentTop?: undefined
  parentLeft?: undefined
  patchParent?: undefined
  hardpointKey?: undefined
}

// Single part recursive component
export const PartImage: React.FC<PropsWithoutParent | PropsWithParent> = ({
  xray,
  parent,
  parentTop,
  parentLeft,
  hardpoint,
  hardpointKey,
  canvasHeight,
  canvasWidth,
  patchGun,
  patchParent,
}) => {

  // Patch the entire hardpoint and go up the parts linked list
  const patchHardpoint = (newHardpoint: Hardpoint) => {
    if (patchParent && parent.part && hardpointKey) {
      patchParent({
        ...parent,
        part: {
          ...parent.part,
          hardpoints: {
            ...parent.part.hardpoints,
            [hardpointKey]: newHardpoint,
          }
        },
      })
      return
    }

    patchGun(newHardpoint)
  }

  // Patch this single part
  const patchPart = (newPart: GunPart) => {
    if (hardpoint.part && isCompatible(hardpoint.part, newPart)) {
      patchHardpoint({
        ...hardpoint,
        part: {
          ...newPart,
          hardpoints: hardpoint.part.hardpoints,
        },
      })
      return
    }

    patchHardpoint({
      ...hardpoint,
      part: newPart,
    })
  }

  const [menu, setMenu] = React.useState(false)
  const [{ menuToggler }, { setMenuToggler }] = useGunEditor()

  const closeMenu = () => {
    setMenu(false)
  }

  // Toggle contextual menu
  const toggleMenu = () => {
    const status = !menu

    // Only allow one menu at the time
    if (!menu && menuToggler) {
      menuToggler()
    }

    if (menu && menuToggler) {
      closeMenu()
      setMenuToggler(null)
      return
    }
  
    setMenu(status)
    setMenuToggler(closeMenu)
  }

  if (!hardpoint.part) {
    return null
  }

  // Calculate X/Y positions in canvas
  const topPos = parent && parentTop
    ? getPositionWithParent(hardpoint, hardpointKey, parent, parentTop, 'Y', 'height')
    : getRootPosition(hardpoint, canvasHeight, 'Y', 'height')

  const leftPos = parent && parentLeft
    ? getPositionWithParent(hardpoint, hardpointKey, parent, parentLeft, 'X', 'width')
    : getRootPosition(hardpoint, canvasWidth, 'X', 'width')

  // Render
  return (
    <>
      {menu && (
        <ContextualMenu
          title={hardpoint.name}
          options={hardpoint.options}
          selectPart={patchPart}
        />
      )}
      <button
        style={{
          position: 'absolute',
          top: compileSize(topPos),
          left: compileSize(leftPos),
          zIndex: hardpoint.zlayer,
          width: compileSize(px(hardpoint.part.asset.width)),
          height: compileSize(px(hardpoint.part.asset.height)),
          opacity: xray ? 0.5 : 1,
          border: 'none',
          background: 'none',
        }}
      >
        <img
          src={hardpoint.part.asset.src}
          onClick={evt => {
            evt.stopPropagation()
            toggleMenu()
          }}
        />
      </button>
      {hardpoint.part.hardpoints && entriesOf(hardpoint.part.hardpoints).map(([key, hp]) => (
        <PartImage
          key={key}
          xray={xray}
          parent={hardpoint}
          parentTop={topPos}
          parentLeft={leftPos}
          hardpoint={hp}
          hardpointKey={key}
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
          patchGun={patchGun}
          patchParent={patchHardpoint}
        />
      ))}
    </>
  )
}
