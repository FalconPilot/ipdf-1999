import styled from '@emotion/styled'

import { FlexProps, flexCss } from '~/styled'

export const CanvasWrapper = styled.div({
  width: '100%',
})

export const PartsMenu = styled.div<FlexProps>(props => ({
  ...flexCss(props),
  width: '100%',
}))
