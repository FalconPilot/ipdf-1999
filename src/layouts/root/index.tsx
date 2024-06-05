import * as React from 'react'
import { Footer, Header, Main, MainTitle } from './styled'

export const RootLayout: React.FC<{
  children: React.ReactNode
}> = ({
  children,
}) => (
  <>
    <Header>
      <MainTitle>IPDF 1999</MainTitle>
    </Header>
    <Main>{children}</Main>
    <Footer>
      Hello there
    </Footer>
  </>
)
