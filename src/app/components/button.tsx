import * as React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
  stopPropagation?: boolean
}> = ({ children, stopPropagation, onClick, ...props }) => {
  const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) {
      event.stopPropagation()
    }

    if (onClick) {
      onClick(event)
    }
  }, [stopPropagation, onClick])

  return (
    <button
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
