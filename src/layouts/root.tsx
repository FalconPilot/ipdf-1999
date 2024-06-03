import * as React from 'react'

export const RootLayout: React.FC<{
  children: React.ReactNode
}> = ({
  children,
}) => (
  <div>{children}</div>
)
