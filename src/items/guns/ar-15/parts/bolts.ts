import boltStandard from 'public/parts/ar15_bolt_std.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15BoltStandard: GunPart = {
  id: 'ar15_bolt_standard',
  name: 'Standard bolt',
  shortName: 'Standard',
  asset: boltStandard,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
