import handguardShortStd from 'public/parts/ar15_handguard_short_std.png'
import risShortTac from 'public/parts/ar15_ris_tac.png'
import risShortSkel from 'public/parts/ar15_handguard_skel.png'

import { TopRailLaser } from '~/items/common-parts'
import { GunPart, Hardpoint } from '~/types'
import { px } from '~/utils'

import { AR15GasblockSight } from './gasblocks'

const commonHardpoints: Record<string, Hardpoint> = {
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

const topRailHardpoints: Record<string, Hardpoint> = {
  toprail: {
    name: 'Top rail',
    zlayer: 85,
    originX: 'center',
    originY: 'top',
    offsetX: px(0),
    offsetY: px(0),
    allowEmpty: true,
    part: null,
    options: [
      TopRailLaser,
    ],
  },
}

const sideRailHardpoints: Record<string, Hardpoint> = {
  siderail: {
    name: 'Side rail',
    zlayer: 87,
    originX: 'center',
    originY: 'center',
    offsetX: px(0),
    offsetY: px(0),
    allowEmpty: true,
    part: null,
    options: [],
  },
}

const underRailHardpoints: Record<string, Hardpoint> = {
  bottomrail: {
    name: 'Bottom rail',
    zlayer: 86,
    originX: 'center',
    originY: 'bottom',
    offsetX: px(0),
    offsetY: px(0),
    allowEmpty: true,
    part: null,
    options: [],
  },
}

export const AR15HandguardShortStd: GunPart = {
  name: 'Standard short handguard',
  shortName: 'Standard',
  asset: handguardShortStd,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: commonHardpoints,
}

export const AR15RISTac: GunPart = {
  name: 'Tactical short RIS',
  shortName: 'Short TAC-RIS',
  asset: risShortTac,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: {
    ...commonHardpoints,
    ...topRailHardpoints,
    ...sideRailHardpoints,
    ...underRailHardpoints,
  },
}

export const AR15RISSkel: GunPart = {
  name: 'Skeletonized short RIS',
  shortName: 'Short SKEL-RIS',
  asset: risShortSkel,
  offsetX: px(2),
  offsetY: px(-1),
  hardpoints: {
    ...commonHardpoints,
    ...topRailHardpoints,
    ...sideRailHardpoints,
  },
}
