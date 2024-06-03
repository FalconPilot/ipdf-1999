import barrelShort from 'public/parts/ar15_barrel_short.png'

import { GunPart, Hardpoint } from '~/types'
import { px } from '~/utils'

import { AR15HandguardShortStd, AR15RISTac } from './handguards'
import { AR15FlashHiderStd, AR15SupressorTac } from './muzzles'

const muzzle: Hardpoint = {
  name: 'Muzzle',
  zlayer: 75,
  originX: 'right',
  originY: 'center',
  offsetX: px(-15),
  offsetY: px(0),
  part: AR15FlashHiderStd,
  options: [
    AR15FlashHiderStd,
    AR15SupressorTac,
  ],
}

const shortHandguardHardpoints: Record<string, Hardpoint> = {
  handguard: {
    name: 'Handguard',
    zlayer: 70,
    originX: 'center',
    originY: 'center',
    offsetX: px(-74),
    offsetY: px(0),
    part: AR15HandguardShortStd,
    options: [
      AR15HandguardShortStd,
      AR15RISTac,
    ],
  },
  muzzle,
}

export const AR15BarrelShort: GunPart = {
  name: 'Short barrel',
  shortName: 'Short',
  asset: barrelShort,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: shortHandguardHardpoints,
}
