import * as React from 'react'

import { GunCore, Hardpoint } from '~/types'
import { px } from '~/utils'
import { useGunEditor } from '~/app/contexts'

import { PartImage } from './part-image'

const CANVAS_HEIGHT = px(400)
const CANVAS_WIDTH = px(1200)

export const GunCanvas: React.FC<{
  gun: GunCore
}> = ({ gun: initialGun }) => {

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
          height: CANVAS_HEIGHT[0],
          width: CANVAS_WIDTH[0],
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
