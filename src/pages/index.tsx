import * as React from 'react'

import Head from 'next/head'

import { GunCanvas } from '~/app/components'
import { AR15 } from '~/items'
import { GunEditorContext } from '~/app/contexts'

const HomePage: React.FC = () => (
  <>
    <Head>
      <title>IPDF 1999</title>
    </Head>
    <div>
      <GunEditorContext>
        <GunCanvas gun={AR15} />
      </GunEditorContext>
    </div>
  </>
)

export default HomePage
