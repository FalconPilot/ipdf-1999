import triggerStandard from 'public/parts/ar15_trigger_std.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15TriggerStandard: GunPart = {
  name: 'Standard trigger',
  shortName: 'Standard',
  asset: triggerStandard,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
