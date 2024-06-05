import tmpAsset from 'public/parts/optic_rds.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const TopRailLaser: GunPart = {
  name: 'Laser pointer',
  shortName: 'Laser',
  offsetX: px(0),
  offsetY: px(0),
  asset: tmpAsset,
  hardpoints: null
}
