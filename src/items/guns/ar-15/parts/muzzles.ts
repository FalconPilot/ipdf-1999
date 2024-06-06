import flashHiderStandard from 'public/parts/ar15_muzzle_flash_std.png'
import suppressorTac from 'public/parts/ar15_suppressor_tac.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15FlashHiderStd: GunPart = {
  id: 'ar15_birdcage_hider',
  name: 'Birdcage flash hider',
  shortName: 'Flash hider',
  asset: flashHiderStandard,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}

export const AR15SupressorTac: GunPart = {
  id: 'ar15_tactical_suppressor',
  name: 'Tactical suppressor',
  shortName: 'Tac. suppressor',
  asset: suppressorTac,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
