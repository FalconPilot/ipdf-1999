import { CssSize, Hardpoint } from '~/types'

import { px, sizeAdd, sizeDiv, sizeSub } from '../css'

// Get root element position
export const getRootPosition = (
  hardpoint: Hardpoint,
  canvasSize: CssSize<'px'>,
  axis: 'X' | 'Y',
  measure: 'width' | 'height'
): CssSize<'px'> => {
  if (!hardpoint.part) {
    console.warn('No part found for RootPOS')
    return px(0)
  }

  const originKey = `origin${axis}` as const
  const offsetKey = `offset${axis}` as const

  const assetSize = px(hardpoint.part.asset[measure])

  const resultKey = ({
    left: 'start',
    top: 'start',
    center: 'center',
    right: 'end',
    bottom: 'end',
  } as const)[hardpoint[originKey]]

  const middle = sizeDiv([canvasSize, px(2)])
  const offset = sizeAdd([hardpoint[offsetKey], hardpoint.part[offsetKey]])

  return {
    start: sizeAdd([
      sizeSub([
        middle,
        assetSize,
      ]),
      offset,
    ]),
    center: sizeAdd([
      sizeSub([
        middle,
        sizeDiv([assetSize, px(2)]),
      ]),
      offset,
    ]),
    end: sizeAdd([
      middle,
      assetSize,
      offset,
    ]),
  }[resultKey]
}

// Get element position with parent
export const getPositionWithParent = (
  hardpoint: Hardpoint,
  hardpointKey: string,
  parent: Hardpoint,
  parentPos: CssSize<'px'>,
  axis: 'X' | 'Y',
  measure: 'width' | 'height'
): CssSize<'px'> => {
  if (!hardpoint.part || !parent.part) {
    console.warn('No part found for ChildPOS')
    return px(0)
  }

  const originKey = `origin${axis}` as const
  const offsetKey = `offset${axis}` as const

  const assetSize = px(hardpoint.part.asset[measure])
  const parentAssetSize = px(parent.part.asset[measure])

  const offset = sizeAdd([
    hardpoint[offsetKey],
    hardpoint.part[offsetKey],
    parent.part.childrenOffsets?.[hardpointKey]?.[offsetKey] ?? px(0),
  ])

  const resultKey = ({
    left: 'start',
    top: 'start',
    center: 'center',
    right: 'end',
    bottom: 'end',
  } as const)[hardpoint[originKey]]

  return {
    start: sizeAdd([
      sizeSub([parentPos, assetSize]),
      offset,
    ]),
    end: sizeAdd([
      parentPos,
      parentAssetSize,
      offset,
    ]),
    center: sizeAdd([
      parentPos,
      sizeSub([
        sizeDiv([parentAssetSize, px(2)]),
        sizeDiv([assetSize, px(2)]),
      ]),
      offset,
    ]),
  }[resultKey]
}