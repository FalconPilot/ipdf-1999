import { CssSize, NonEmptyArray, SizeUnit } from '~/types'

export const size = <Unit extends SizeUnit>(unit: Unit) => (value: number): CssSize<Unit> =>
  [value, unit] as const

// Preset size init functions
export const px = size('px')
export const em = size('em')
export const vw = size('vw')
export const vh = size('vh')
export const percent = size('%')

// Size operation functions
export const sizeOperation = (
  operation: (a: number, b: number) => number
) => <Unit extends SizeUnit>(sizes: NonEmptyArray<CssSize<Unit>>): CssSize<Unit> => {
  if (sizes.length < 2) {
    return sizes[0]
  }

  const totalValue = sizes
    .map(size => size[0])
    .reduce((total, value, idx) => (
      idx === 0 ? total : operation(total, value)
    ), sizes[0][0])

  return [
    totalValue,
    sizes[0][1],
  ] as const
}

export const sizeSingleOperation = (
  operation: (a: number) => number
) => <Unit extends SizeUnit>(size: CssSize<Unit>): CssSize<Unit> => [
  operation(size[0]),
  size[1],
] as const

// Preset size operation functions
export const sizeAdd = sizeOperation((a, b) => a + b)
export const sizeSub = sizeOperation((a, b) => a - b)
export const sizeDiv = sizeOperation((a, b) => a / b)
export const sizeMult = sizeOperation((a, b) => a * b)
export const sizeMax = sizeOperation(Math.max)
export const sizeMin = sizeOperation(Math.min)
export const sizeFloor = sizeSingleOperation(Math.floor)
export const sizeCeil = sizeSingleOperation(Math.ceil)

// Compilation function
export const compileSize = <Unit extends SizeUnit>(size: CssSize<Unit>): string =>
  `${size[0]}${size[1]}`
