import laserPeq from 'public/parts/toprail_laser_peq.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const TopRailLaser: GunPart = {
  name: 'Laser pointer',
  shortName: 'Laser',
  offsetX: px(0),
  offsetY: px(8),
  asset: laserPeq,
  hardpoints: null
}
