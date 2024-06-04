import * as React from 'react'

import { GunPart } from '~/types'

export const ContextualMenu: React.FC<{
  title: string
  options: GunPart[]
  selectPart: (part: GunPart) => void
}> = ({ title, options, selectPart }) => (
  <div
    onClick={evt => { evt.stopPropagation() }}
  >
    <h3>{title}</h3>
    {options.map(part => (
      <button key={part.name} onClick={() => selectPart(part)}>
        {part.shortName}
      </button>
    ))}
  </div>
)
