import collapsibleRegular from 'public/parts/ar15_stock_rcol.png'

import { GunPart } from '~/types'
import { px } from '~/utils'

export const AR15StockRegularCollapsible: GunPart = {
  id: 'ar15_stock_collapsible_regular',
  name: 'Regular collapsible stock',
  shortName: 'Collapsible regular',
  asset: collapsibleRegular,
  offsetX: px(0),
  offsetY: px(0),
  hardpoints: null,
}
