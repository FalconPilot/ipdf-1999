export type ValuesOfArray<T extends unknown[]> = T[number]

export type NonEmptyArray<T> = [T, ...T[]]
