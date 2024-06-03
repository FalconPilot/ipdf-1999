import lowerValkyrie from 'public/parts/ar15_lower_valkyrie.png'
import lowerTac from 'public/parts/ar15_lower_nov.png'

import { GunPart, Hardpoint } from '~/types'
import { px } from '~/utils'

import { AR15GripStandard, AR15GripTactical } from './grips'
import { AR15UpperValkyrie } from './uppers'
import { AR15MagStanag30 } from './mags'
import { AR15StockRegularCollapsible } from './stocks'
import { AR15TriggerStandard } from './triggers'

const hardpoints: Record<string, Hardpoint> = {
  upper: {
    name: 'Upper receiver',
    zlayer: 60,
    originX: 'center',
    originY: 'top',
    offsetX: px(3),
    offsetY: px(38),
    part: AR15UpperValkyrie,
    options: [
      AR15UpperValkyrie,
    ],
  },
  grip: {
    name: 'Grip',
    zlayer: 55,
    originX: 'left',
    originY: 'bottom',
    offsetX: px(51),
    offsetY: px(-26),
    part: AR15GripStandard,
    options: [
      AR15GripStandard,
      AR15GripTactical,
    ],
  },
  mag: {
    name: 'Magazine',
    zlayer: 5,
    originX: 'center',
    originY: 'bottom',
    offsetX: px(50),
    offsetY: px(-65),
    part: AR15MagStanag30,
    options: [
      AR15MagStanag30,
    ],
  },
  stock: {
    name: 'Stock',
    zlayer: 8,
    originX: 'left',
    originY: 'center',
    offsetX: px(3),
    offsetY: px(11),
    part: AR15StockRegularCollapsible,
    options: [
      AR15StockRegularCollapsible,
    ],
  },
  triggers: {
    name: 'Trigger',
    zlayer: 7,
    originX: 'center',
    originY: 'center',
    offsetX: px(-15),
    offsetY: px(0),
    part: AR15TriggerStandard,
    options: [
      AR15TriggerStandard,
    ],
  },
}

export const AR15LowerValkyrie: GunPart = {
  name: 'Standard Lower receiver',
  shortName: 'Standard',
  asset: lowerValkyrie,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints,
}

export const AR15LowerTac: GunPart = {
  name: 'Tactical Lower receiver',
  shortName: 'Tactical',
  asset: lowerTac,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints,
  childrenOffsets: {
    grip: {
      offsetX: px(2),
      offsetY: px(-6),
    },
    mag: {
      offsetX: px(0),
      offsetY: px(-6),
    },
    stock: {
      offsetX: px(0),
      offsetY: px(-4)
    },
  },
}
