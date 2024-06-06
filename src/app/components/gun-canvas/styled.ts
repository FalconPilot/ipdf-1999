import styled from '@emotion/styled'

import { Flex, flexCss } from '~/styled'
import { CssSize } from '~/types'
import { compileSize } from '~/utils'

export const CanvasViewport = styled(Flex)({
  position: 'relative',
  width: '100%',
  backgroundColor: '#555',
  borderTop: '3px solid #777',
  borderBottom: '3px solid #777',

  '&:after': {
    content: '"International Police Defense Force"',
    position: 'absolute',
    top: 'calc(50% - 20px)',
    zIndex: 0,
    fontSize: 40,
    fontVariant: 'small-caps',
    opacity: 0.1,
    transform: 'rotate(-15deg)',
  }
})

export const CanvasWrapper = styled.div<{
  width: CssSize<'px'>,
  height: CssSize<'px'>,
}>(({ width, height }) => ({
  position: 'relative',
  width: compileSize(width),
  height: compileSize(height),
  zIndex: 1,
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
    padding: '4px 8px',
  },
)
