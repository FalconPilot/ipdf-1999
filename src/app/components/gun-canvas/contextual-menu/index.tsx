import * as React from 'react'

import { GunPart, Hardpoint } from '~/types'

export const ContextualMenu: React.FC<{
  hardpoint: Hardpoint
  selectPart: (part: GunPart | null) => void
}> = ({ hardpoint, selectPart }) => (
  <div
    onClick={evt => { evt.stopPropagation() }}
  >
    <h3>{hardpoint.name}</h3>
    {hardpoint.allowEmpty && (
      <button onClick={() => selectPart(null)}>Nothing</button>
    )}
    {hardpoint.options.map(part => (
      <button key={part.name} onClick={() => selectPart(part)}>
        {part.shortName}
      </button>
    ))}
  </div>
)
