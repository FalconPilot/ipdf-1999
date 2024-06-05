import { StaticImageData } from 'next/image'

import { CssSize } from './css'

export type HardpointOriginX = 'left' | 'right' | 'center'
export type HardpointOriginY = 'top' | 'bottom' | 'center'

export type CanvasSize = 'rifle' | 'handgun'

export type GunPart = {
  name: string
  shortName: string
  asset: StaticImageData
  offsetX: CssSize<'px'>
  offsetY: CssSize<'px'>
  hardpoints: Record<string, Hardpoint> | null
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
  canvas: CanvasSize
  coreHardpoint: Hardpoint
}