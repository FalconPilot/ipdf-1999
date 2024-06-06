import { GunCore, Hardpoint } from '~/types'
import { px } from '~/utils'

import {
  AR15LowerTac,
  AR15LowerValkyrie,
} from './parts'

export * from './parts'

const lowerReceiver: Hardpoint = {
  name: 'Lower receiver',
  zlayer: 50,
  originX: 'center',
  originY: 'center',
  offsetX: px(-150),
  offsetY: px(0),
  part: AR15LowerValkyrie,
  options: [
    AR15LowerValkyrie,
    AR15LowerTac,
  ],
}

export const AR15: GunCore = {
  name: 'AR-15',
  caliber: '5.56x45mm',
  canvas: 'rifle',
  coreHardpoint: lowerReceiver,
}
