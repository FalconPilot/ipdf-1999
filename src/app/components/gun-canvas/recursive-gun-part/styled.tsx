import styled from '@emotion/styled'

import { Button } from '~/app/components'
import { Flex, flexCss } from '~/styled'
import { CssSize } from '~/types'
import { compileSize } from '~/utils'

export const PartImage = styled.img<{
  $top: CssSize<'px'>,
  $left: CssSize<'px'>,
  $xray: boolean,
  $zIndex: number,
}>(props => ({
  position: 'absolute',
  top: compileSize(props.$top),
  left: compileSize(props.$left),
  transition: 'opacity 0.1s',
  opacity: props.$xray ? 0.5 : 1,
  zIndex: props.$zIndex,
}))

export const PartButton = styled(Button)(
  flexCss,
  {
    padding: '8px',
  },
)

export const PartButtonImageWrapper = styled.div(
  flexCss,
  { flex: 1 },
)

export const PartButtonImage = styled.img()
