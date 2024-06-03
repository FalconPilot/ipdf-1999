type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][]

export const entriesOf = <T extends object>(obj: T) => Object.entries(obj) as Entries<T>
