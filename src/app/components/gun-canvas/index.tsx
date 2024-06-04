import * as React from 'react'
import { createPortal } from 'react-dom'

import { GunCore, Hardpoint } from '~/types'
import { compileSize, px, sizeDiv, sizeMult, sizeSub } from '~/utils'
import { useGunEditor } from '~/app/contexts'

import { RecursiveGunPart } from './recursive-gun-part'

const CANVAS_HEIGHT = px(400)
const CANVAS_WIDTH = px(1200)

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

  const height = sizeMult([CANVAS_HEIGHT, px(scale)])
  const width = sizeMult([CANVAS_WIDTH, px(scale)])

  const top = sizeDiv([
    sizeSub([height, CANVAS_HEIGHT]),
    px(2),
  ])

  const left = sizeDiv([
    sizeSub([width, CANVAS_WIDTH]),
    px(2),
  ])

  return (
    <div>
      <div>
        <button onClick={() => setXray(!xray)}>Toggle XRAY</button>
      </div>
      <div id='parts-menu'>
        <h4>Parts</h4>
      </div>
      <div style={{
        position: 'relative',
        height: compileSize(sizeMult([CANVAS_HEIGHT, px(scale)])),
        width: compileSize(sizeMult([CANVAS_WIDTH, px(scale)])),
      }}>
        <div
          onClick={closeMenu}
          style={{
            position: 'absolute',
            transition: '0.2s',
            top: compileSize(top),
            left: compileSize(left),
            width: compileSize(CANVAS_WIDTH),
            height: compileSize(CANVAS_HEIGHT),
            transform: `scale(${scale})`,
            backgroundColor: '#CCC',
          }}
        >
          <RecursiveGunPart
            xray={xray}
            hardpoint={gun.coreHardpoint}
            canvasHeight={CANVAS_HEIGHT}
            canvasWidth={CANVAS_WIDTH}
            patchGun={patchGun}
          />
        </div>
      </div>
      <div id='contextual-menu'></div>
    </div>
  )
}
