import * as React from 'react'
import { createPortal } from 'react-dom'

import { useGunEditor } from '~/app/contexts'
import { CssSize, GunPart, Hardpoint } from '~/types'
import { entriesOf } from '~/utils'

import { ContextualMenu } from './contextual-menu'
import { getPositionWithParent, getRootPosition, isCompatible } from './utils'
import { PartButton, PartButtonImage, PartButtonImageWrapper, PartImage } from './styled'

type PropsBase = {
  xray: boolean
  hardpoint: Hardpoint
  canvasHeight: CssSize<'px'>
  canvasWidth: CssSize<'px'>
  editable?: boolean
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
  editable,
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

  // Patch the entire hardpoint and go up the parts list
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

  // Patch from this part
  const patchPart = (newPart: GunPart | null) => {
    if (newPart === null) {
      patchHardpoint({
        ...hardpoint,
        part: null,
      })
      return
    }

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
  const [partsMenu, setPartsMenu] = React.useState<HTMLElement | null>(null)
  const [contextualMenu, setContextualMenu] = React.useState<HTMLElement | null>(null)

  const [{ menuToggler }, { setMenuToggler }] = useGunEditor()

  // Get HTMLElement on render
  React.useEffect(() => {
    setPartsMenu(document.getElementById('parts-menu'))
    setContextualMenu(document.getElementById('contextual-menu'))
  }, [])

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
      {partsMenu && createPortal(
        <PartButton
          onClick={toggleMenu}
          stopPropagation
          direction='column'
          align='center'
          justify='flex-start'
        >
          <strong>{hardpoint.name}</strong>
          <PartButtonImageWrapper justify='center' align='center'>
            {hardpoint.part ? (
              <PartButtonImage
                src={hardpoint.part.asset.src}
                width={hardpoint.part.asset.width / 2}
                height={hardpoint.part.asset.height / 2}
              />
            ) : (
              <div>+</div>
            )}
          </PartButtonImageWrapper>
        </PartButton>,
        partsMenu,
      )}
      {menu && contextualMenu && (
        createPortal(
          <ContextualMenu
            hardpoint={hardpoint}
            selectPart={patchPart}
          />,
          contextualMenu,
        )
      )}
      {hardpoint.part && (
        <PartImage
          src={hardpoint.part.asset.src}
          $top={topPos}
          $left={leftPos}
          $xray={xray}
          $zIndex={hardpoint.zlayer}
        />
      )}
      {hardpoint.part?.hardpoints && entriesOf(hardpoint.part.hardpoints).map(([key, child]) => (
        <RecursiveGunPart
          key={key}
          xray={xray}
          editable={editable}
          parent={hardpoint}
          parentTop={topPos}
          parentLeft={leftPos}
          hardpoint={child}
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
