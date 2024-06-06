import barrelShort from 'public/parts/ar15_barrel_short.png'
import barrelStub from 'public/parts/ar15_barrel_stub.png'

import { GunPart, Hardpoint } from '~/types'
import { px } from '~/utils'

import {
  AR15HandguardShortStd,
  AR15RISSkel,
  AR15RISTac,
} from './handguards'
import { AR15FlashHiderStd, AR15SupressorTac } from './muzzles'
import { AR15GasTubeShort } from './gastubes'

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
    offsetX: px(-73),
    offsetY: px(0),
    part: AR15HandguardShortStd,
    options: [
      AR15HandguardShortStd,
      AR15RISTac,
      AR15RISSkel,
    ],
  },
  gastube: {
    name: 'Gas tube',
    zlayer: 11,
    originX: 'center',
    originY: 'top',
    offsetX: px(-80),
    offsetY: px(3),
    part: AR15GasTubeShort,
    options: [
      AR15GasTubeShort,
    ],
  },
}

const commonHardpoints = {
  muzzle,
}

export const AR15BarrelShort: GunPart = {
  id: 'ar15_barrel_short',
  name: 'Short barrel',
  shortName: 'Short',
  asset: barrelShort,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: {
    ...shortHandguardHardpoints,
    ...commonHardpoints,
  },
}

export const AR15BarrelStub: GunPart = {
  id: 'ar15_barrel_stub',
  name: 'Stub barrel',
  shortName: 'Stub',
  asset: barrelStub,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: {
    ...shortHandguardHardpoints,
    ...commonHardpoints,
  },
  childrenOffsets: {
    handguard: {
      offsetX: px(45),
      offsetY: px(0),
    },
    gastube: {
      offsetX: px(46),
      offsetY: px(0),
    },
  },
}
