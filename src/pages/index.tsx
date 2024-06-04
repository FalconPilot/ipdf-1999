import * as React from 'react'

import Head from 'next/head'

import { GunCanvas } from '~/app/components'
import { AR15 } from '~/items'
import { GunEditorContext } from '~/app/contexts'

const MIN_SCALE = 1
const MAX_SCALE = 10

const HomePage: React.FC = () => {
  const [scale, setScale] = React.useState(10)

  return (
    <>
      <Head>
        <title>IPDF 1999</title>
      </Head>
      <div>
        <h4>Scale</h4>
        <input
          type='number'
          value={scale}
          min={MIN_SCALE}
          max={MAX_SCALE}
          onChange={evt => {
            const value = evt.currentTarget.value
            const parsedScale = parseInt(value)

            if (isNaN(parsedScale)) {
              throw new Error('You can only use an integer for scale')
            }

            setScale(Math.max(Math.min(parsedScale, MAX_SCALE), MIN_SCALE))
          }}
        />
        <GunEditorContext>
          <GunCanvas gun={AR15} scale={scale / 10} />
        </GunEditorContext>
      </div>
    </>
  )
}

export default HomePage
