import carryHandle from 'public/parts/ar15_sight_carryhandle.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15CarryHandle: GunPart = {
  name: 'Carry handle',
  shortName: 'Carry handle',
  asset: carryHandle,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
