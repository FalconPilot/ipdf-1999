import * as React from 'react'

import { CanvasSize, CssSize, GunCore, Hardpoint } from '~/types'
import { compileSize, px, sizeDiv, sizeMult, sizeSub } from '~/utils'
import { useGunEditor } from '~/app/contexts'

import { RecursiveGunPart } from './recursive-gun-part'
import { CanvasWrapper, PartsMenu } from './styled'

const CANVAS_SIZES: { [k in CanvasSize]: {
  width: CssSize<'px'>
  height: CssSize<'px'>
} } = {
  rifle: { width: px(1024), height: px(400) },
  handgun: { width: px(800), height: px(400) }
}

export const GunCanvas: React.FC<{
  gun: GunCore
  scale?: number
}> = ({ gun: initialGun, scale = 1 }) => {

  const [xray, setXray] = React.useState(false)
  const [{ gun, menuToggler }, { setGun, setMenuToggler }] = useGunEditor()

  React.useEffect(() => {
    setGun(initialGun)
  }, [initialGun])

  if (!gun) {
    return (
      <div>Loading...</div>
    )
  }

  const { width: canvasWidth, height: canvasHeight } = CANVAS_SIZES[gun.canvas]

  const patchGun = (coreHardpoint: Hardpoint) => {
    const newGun = {
      ...gun,
      coreHardpoint,
    }

    setGun(newGun)
  }

  const closeMenu = () => {
    if (menuToggler) {
      menuToggler()
      setMenuToggler(null)
    }
  }

  const height = sizeMult([canvasHeight, px(scale)])
  const width = sizeMult([canvasWidth, px(scale)])

  const top = sizeDiv([
    sizeSub([height, canvasHeight]),
    px(2),
  ])

  const left = sizeDiv([
    sizeSub([width, canvasWidth]),
    px(2),
  ])

  return (
    <CanvasWrapper>
      <div>
        <button onClick={() => setXray(!xray)}>Toggle XRAY</button>
      </div>
      <PartsMenu id='parts-menu'>
        <h4>Parts</h4>
      </PartsMenu>
      <div style={{
        position: 'relative',
        height: compileSize(sizeMult([canvasHeight, px(scale)])),
        width: compileSize(sizeMult([canvasWidth, px(scale)])),
      }}>
        <div
          onClick={closeMenu}
          style={{
            position: 'absolute',
            transition: '0.2s',
            top: compileSize(top),
            left: compileSize(left),
            width: compileSize(canvasWidth),
            height: compileSize(canvasHeight),
            transform: `scale(${scale})`,
            backgroundColor: '#CCC',
          }}
        >
          <RecursiveGunPart
            xray={xray}
            hardpoint={gun.coreHardpoint}
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            patchGun={patchGun}
          />
        </div>
      </div>
      <div id='contextual-menu'></div>
    </CanvasWrapper>
  )
}
