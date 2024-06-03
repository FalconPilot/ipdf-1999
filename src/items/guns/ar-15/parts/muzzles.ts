import flashHiderStandard from 'public/parts/ar15_muzzle_flash_std.png'
import suppressorTac from 'public/parts/ar15_suppressor_tac.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15FlashHiderStd: GunPart = {
  name: 'Flash hider',
  shortName: 'Flash hider',
  asset: flashHiderStandard,
  offsetX: px(0),
  offsetY: px(-1),
  hardpoints: null,
}

export const AR15SupressorTac: GunPart = {
  name: 'Tactical suppressor',
  shortName: 'Tac. suppressor',
  asset: suppressorTac,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
