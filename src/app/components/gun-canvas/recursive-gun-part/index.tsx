import * as React from 'react'
import { createPortal } from 'react-dom'

import { useGunEditor } from '~/app/contexts'
import { Button } from '~/app/styled'
import { CssSize, GunPart, Hardpoint } from '~/types'
import { compileSize, entriesOf } from '~/utils'

import { ContextualMenu } from '../contextual-menu'
import { getPositionWithParent, getRootPosition } from './utils'
import { PartImage } from './styled'

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

  // Check for hardpoints transfer compatibility
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
export const RecursiveGunPart: React.FC<PropsWithoutParent | PropsWithParent> = ({
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

  const partsMenu = document.getElementById('parts-menu')
  const contextualMenu = document.getElementById('contextual-menu')

  // Render
  return (
    <>
      {partsMenu && createPortal(
        <Button
          onClick={toggleMenu}
          stopPropagation
        >
          {hardpoint.name}
        </Button>,
        partsMenu,
      )}
      {menu && contextualMenu && (
        createPortal(
          <ContextualMenu
            title={hardpoint.name}
            options={hardpoint.options}
            selectPart={patchPart}
          />,
          contextualMenu,
        )
      )}
        <PartImage
          src={hardpoint.part.asset.src}
          $top={topPos}
          $left={leftPos}
          $xray={xray}
          $zIndex={hardpoint.zlayer}
        />
      {hardpoint.part.hardpoints && entriesOf(hardpoint.part.hardpoints).map(([key, hp]) => (
        <RecursiveGunPart
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
