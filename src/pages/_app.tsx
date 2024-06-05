import * as React from 'react'

import { AppProps } from 'next/app'

import { RootLayout } from '~/layouts'
import { Global, Interpolation, Theme } from '@emotion/react'

// Global styles
export const globalStyles: Interpolation<Theme> = {
  body: {
    height: '100vh',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  },
  '#__next': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}

// App wrapper
const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <RootLayout>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </RootLayout>
)

export default App
