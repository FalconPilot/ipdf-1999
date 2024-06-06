
import gasblockSight from 'public/parts/ar15_gasblock_sight.png'
import gasBlockSlim from 'public/parts/ar15_gasblock_slim.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15GasblockSight: GunPart = {
  id: 'ar15_gb_front_sight',
  name: 'Front sight',
  shortName: 'Front sight',
  asset: gasblockSight,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}

export const AR15GasblockSlim: GunPart = {
  id: 'ar15_gb_slim',
  name: 'Slim gasblock',
  shortName: 'Slim',
  asset: gasBlockSlim,
  offsetX: px(0),
  offsetY: px(11),
  hardpoints: null,
  forbids: [
    'ar15_carry_handle',
  ],
}
