import laserPeq from 'public/parts/siderail_laser_peq.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const SideRailLaser: GunPart = {
  id: 'siderail_laser',
  name: 'Laser pointer',
  shortName: 'Laser',
  offsetX: px(0),
  offsetY: px(8),
  asset: laserPeq,
  forbids: [
    'toprail_laser',
  ],
  hardpoints: null,
}
