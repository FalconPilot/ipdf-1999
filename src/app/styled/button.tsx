import * as React from 'react'

import { styled } from 'styled-components'

const ButtonElement = styled.button({
  padding: '2px 4px',
})

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
  stopPropagation: boolean
}> = ({
  children,
  stopPropagation,
  onClick,
  ...props
}) => {
  const handleClick = React.useCallback((
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (stopPropagation) {
      evt.stopPropagation()
    }

    if (onClick) {
      onClick(evt)
    }
  }, [onClick])

  return (
    <ButtonElement
      {...props}
      onClick={handleClick}
    >
      {children}
    </ButtonElement>
  )
}
