import * as React from 'react'

import { GunCore, Hardpoint } from '~/types'
import { compileSize, px, sizeMult } from '~/utils'
import { useGunEditor } from '~/app/contexts'

import { PartImage } from './part-image'

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

  return (
    <div>
      <div>
        <button onClick={() => setXray(!xray)}>Toggle XRAY</button>
      </div>
      <div
        onClick={closeMenu}
        style={{
          position: 'relative',
          height: compileSize(CANVAS_HEIGHT),
          width: compileSize(CANVAS_WIDTH),
          transform: `scale(${scale})`,
        }}
      >
        <PartImage
          xray={xray}
          hardpoint={gun.coreHardpoint}
          canvasHeight={CANVAS_HEIGHT}
          canvasWidth={CANVAS_WIDTH}
          patchGun={patchGun}
        />
      </div>
    </div>
  )
}
