import rdsTac from 'public/parts/optic_rds.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const OpticTacticalRDS: GunPart = {
  id: 'optic_red_dot_tactical',
  name: 'Tactical Red dot sight',
  shortName: 'Tactical RDS',
  asset: rdsTac,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}

