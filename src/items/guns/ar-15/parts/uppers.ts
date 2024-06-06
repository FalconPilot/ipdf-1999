import upperValkyrie from 'public/parts/ar15_upper_valkyrie.png'
import upperLightweight from 'public/parts/ar15_upper_lightweight.png'

import { GunPart, Hardpoint } from '~/types'
import { px } from '~/utils'

import { AR15BarrelShort, AR15BarrelStub } from './barrels'
import { AR15BoltStandard } from './bolts'
import { AR15HandleStandard } from './handles'
import { AR15CarryHandle } from './sights'
import { OpticTacticalRDS } from '~/items/common-parts'

const hardpoints: Record<string, Hardpoint> = {
  barrel: {
    name: 'Barrel assembly',
    zlayer: 20,
    originX: 'right',
    originY: 'center',
    offsetX: px(-12),
    offsetY: px(1),
    part: AR15BarrelShort,
    options: [
      AR15BarrelStub,
      AR15BarrelShort,
    ],
  },
  bolt: {
    name: 'Bolt',
    zlayer: 15,
    originX: 'center',
    originY: 'center',
    offsetX: px(-3),
    offsetY: px(-3),
    part: AR15BoltStandard,
    options: [
      AR15BoltStandard,
    ],
  },
  handle: {
    name: 'Charging handle',
    zlayer: 16,
    originX: 'center',
    originY: 'top',
    offsetX: px(-11),
    offsetY: px(16),
    part: AR15HandleStandard,
    options: [
      AR15HandleStandard,
    ],
  },
  sight: {
    name: 'Sight',
    zlayer: 65,
    originX: 'center',
    originY: 'top',
    offsetX: px(0),
    offsetY: px(5),
    part: AR15CarryHandle,
    options: [
      AR15CarryHandle,
      OpticTacticalRDS,
    ],
  },
}

export const AR15UpperValkyrie: GunPart = {
  id: 'ar15_upper_standard',
  name: 'Standard Upper receiver',
  shortName: 'Standard',
  asset: upperValkyrie,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints,
}

export const AR15UpperLightweight: GunPart = {
  id: 'ar15_upper_lightweight',
  name: 'Lightweight Upper receiver',
  shortName: 'Lightweight',
  asset: upperLightweight,
  offsetX: px(-6),
  offsetY: px(0),
  hardpoints,
  childrenOffsets: {
    sight: {
      offsetX: px(10),
      offsetY: px(0),
    },
    bolt: {
      offsetX: px(10),
      offsetY: px(0),
    },
    handle: {
      offsetX: px(6),
      offsetY: px(0),
    },
  },
}
