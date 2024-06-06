import handleStandard from 'public/parts/ar15_handle_std.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15HandleStandard: GunPart = {
  id: 'ar15_standard_handle',
  name: 'Standard charging handle',
  shortName: 'Standard',
  asset: handleStandard,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
