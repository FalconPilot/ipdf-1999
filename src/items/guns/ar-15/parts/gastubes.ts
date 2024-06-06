
import gasTubeShort from 'public/parts/ar15_gastube_short.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15GasTubeShort: GunPart = {
  id: 'ar15_gastube_short',
  name: 'Short gas tube',
  shortName: 'Short',
  asset: gasTubeShort,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
