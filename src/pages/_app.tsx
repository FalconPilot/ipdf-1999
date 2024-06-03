import * as React from 'react'

import { AppProps } from 'next/app'

import { RootLayout } from '~/layouts'

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => (
  <RootLayout>
    <Component {...pageProps} />
  </RootLayout>
)

export default App
