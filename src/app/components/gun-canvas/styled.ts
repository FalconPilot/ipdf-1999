import styled from '@emotion/styled'

import { flexCss } from '~/styled'
import { CssSize } from '~/types'
import { compileSize } from '~/utils'

export const CanvasWrapper = styled.div<{
  width: CssSize<'px'>,
  height: CssSize<'px'>,
}>(({ width, height }) => ({
  position: 'relative',
  width: compileSize(width),
  height: compileSize(height),
}))

export const Canvas = styled.div<{
  top: CssSize<'px'>
  left: CssSize<'px'>
  width: CssSize<'px'>
  height: CssSize<'px'>
  scale: number
}>(({ top, left, width, height, scale }) => ({
  position: 'absolute',
  top: compileSize(top),
  left: compileSize(left),
  width: compileSize(width),
  height: compileSize(height),
  transform: `scale(${scale})`,
  filter: 'drop-shadow(2px 4px 6px #111)',
}))

export const PartsMenu = styled.div(
  flexCss,
  {
    width: '100%',
    overflow: 'auto',
    gap: '8px',
    padding: '8px',
  },
)
