import gripStandard from 'public/parts/ar15_grip_std.png'
import gripTactical from 'public/parts/ar15_grip_tac.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15GripStandard: GunPart = {
  id: 'ar15_grip_standard',
  name: 'Standard grip',
  shortName: 'Standard',
  asset: gripStandard,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}

export const AR15GripTactical: GunPart = {
  id: 'ar15_grip_tactical',
  name: 'Tactical grip',
  shortName: 'Tactical',
  asset: gripTactical,
  offsetX: px(4),
  offsetY: px(-10),
  hardpoints: null,
}
