import { GunCore, Hardpoint } from '~/types'

const mergeList = (hardpoint: Hardpoint): string[] => {
  if (!hardpoint.part) {
    return []
  }

  const subLists = Object.values(hardpoint.part.hardpoints ?? {})
    .flatMap(mergeList)

  return [
    ...(hardpoint.part.forbids ?? []),
    ...subLists,
  ]
}

export const getForbiddenList = (gun: GunCore): string[] =>
  mergeList(gun.coreHardpoint)
