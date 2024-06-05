import * as React from 'react'

import { CanvasSize, CssSize, GunCore, Hardpoint } from '~/types'
import { compileSize, px, sizeDiv, sizeMult, sizeSub } from '~/utils'
import { useGunEditor } from '~/app/contexts'

import { RecursiveGunPart } from './recursive-gun-part'
import { Canvas, CanvasWrapper, PartsMenu } from './styled'
import { Flex } from '~/styled'

const CANVAS_SIZES: { [k in CanvasSize]: {
  width: CssSize<'px'>
  height: CssSize<'px'>
} } = {
  rifle: { width: px(1024), height: px(400) },
  handgun: { width: px(800), height: px(400) }
}

export const GunCanvas: React.FC<{
  gun: GunCore
  editable?: boolean
  displayControls?: boolean
  scale?: number
}> = ({
  gun: initialGun,
  displayControls,
  editable,
  scale = 1,
}) => {

  const [xray, setXray] = React.useState(false)
  const [{ gun }, { setGun }] = useGunEditor()

  const toggleXray = () => {
    setXray(!xray)
  }

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
    <Flex direction='column' align='center'>
      {displayControls && (
        <div>
          <button onClick={toggleXray}>Toggle XRAY</button>
        </div>
      )}
      {editable && (
        <PartsMenu id='parts-menu' />
      )}
      <CanvasWrapper
        height={sizeMult([canvasHeight, px(scale)])}
        width={sizeMult([canvasWidth, px(scale)])}
      >
        <Canvas
          top={top}
          left={left}
          width={canvasWidth}
          height={canvasHeight}
          scale={scale}
        >
          <RecursiveGunPart
            xray={xray}
            editable={editable}
            hardpoint={gun.coreHardpoint}
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            patchGun={patchGun}
          />
        </Canvas>
      </CanvasWrapper>
      {editable && (
        <PartsMenu id='contextual-menu' />
      )}
    </Flex>
  )
}
