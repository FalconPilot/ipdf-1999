
import gasblockSight from 'public/parts/ar15_gasblock_sight.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15GasblockSight: GunPart = {
  name: 'Front sight',
  shortName: 'Front sight',
  asset: gasblockSight,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
