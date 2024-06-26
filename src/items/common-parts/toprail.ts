import laserPeq from 'public/parts/toprail_laser_peq.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const TopRailLaser: GunPart = {
  id: 'toprail_laser',
  name: 'Laser pointer',
  shortName: 'Laser',
  offsetX: px(0),
  offsetY: px(8),
  asset: laserPeq,
  forbids: [
    'siderail_laser',
  ],
  hardpoints: null,
}
