import { StaticImageData } from 'next/image'

import { CssSize } from './css'

export type RateOfFire
  = 'boltaction'
  | { semiShots: number, burstShots?: number, autoShots?: number }

export type GunStats = {
  bulk: number
  capacity: number
  range: number
  reliability: number
  rateOfFire: RateOfFire
}

export type HardpointOriginX = 'left' | 'right' | 'center'
export type HardpointOriginY = 'top' | 'bottom' | 'center'

export type CanvasSize = 'rifle' | 'handgun'

export type GunPart = {
  id: string
  name: string
  shortName: string
  asset: StaticImageData
  offsetX: CssSize<'px'>
  offsetY: CssSize<'px'>
  hardpoints: Record<string, Hardpoint> | null
  stats?: Partial<GunStats>
  forbids?: string[],
  childrenOffsets?: Record<string, {
    offsetX: CssSize<'px'>
    offsetY: CssSize<'px'>
  }>
}

export type Hardpoint = {
  name: string
  zlayer: number
  originX: HardpointOriginX
  originY: HardpointOriginY
  offsetX: CssSize<'px'>
  offsetY: CssSize<'px'>
  options: GunPart[]
  allowEmpty?: boolean
  part: GunPart | null
}

export type GunCore = {
  name: string
  caliber: string
  canvas: CanvasSize
  coreHardpoint: Hardpoint
}
