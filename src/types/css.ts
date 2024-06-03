export type SizeUnit
  = 'px'
  | '%'
  | 'em'
  | 'vw'
  | 'vh'

export type CssSize<Unit extends SizeUnit> = [number, Unit]
