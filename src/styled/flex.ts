import type * as CSS from 'csstype'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export type FlexProps = {
  direction?: CSS.Property.FlexDirection
  align?: CSS.Property.AlignItems
  justify?: CSS.Property.JustifyContent
}

export const flexCss = (props: FlexProps) => css({
  display: 'flex',
  flexDirection: props.direction,
  alignItems: props.align,
  justifyContent: props.justify,
})

export const Flex = styled.div(flexCss)
