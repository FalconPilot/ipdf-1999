import stanag30 from 'public/parts/ar15_mag_stanag.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15MagStanag30: GunPart = {
  id: 'ar15_stanag_30',
  name: '30rds STANAG',
  shortName: '30rds STANAG',
  asset: stanag30,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
  stats: {
    capacity: 30,
  },
}
