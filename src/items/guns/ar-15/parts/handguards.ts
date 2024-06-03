import handguardShortStd from 'public/parts/ar15_handguard_short_std.png'
import risShortTac from 'public/parts/ar15_ris_tac.png'

import { GunPart, Hardpoint } from '~/types'
import { px } from '~/utils'

import { AR15GasblockSight } from './gasblocks'

const hardpoints: Record<string, Hardpoint> = {
  gasblock: {
    name: 'Gas block',
    zlayer: 80,
    originX: 'right',
    originY: 'center',
    offsetX: px(-2),
    offsetY: px(-15),
    part: AR15GasblockSight,
    options: [
      AR15GasblockSight,
    ],
  }
}

export const AR15HandguardShortStd: GunPart = {
  name: 'Standard short handguard',
  shortName: 'Standard',
  asset: handguardShortStd,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints,
}

export const AR15RISTac: GunPart = {
  name: 'Tactical short RIS',
  shortName: 'Short TAC-RIS',
  asset: risShortTac,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints,
}
