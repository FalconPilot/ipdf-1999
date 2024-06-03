import * as React from 'react'

import { GunPart } from '~/types'

export const ContextualMenu: React.FC<{
  title: string
  options: GunPart[]
  selectPart: (part: GunPart) => void
}> = ({ title, options, selectPart }) => (
  <div
    onClick={evt => { evt.stopPropagation() }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
    }}
  >
    <h3>{title}</h3>
    {options.map(part => (
      <button key={part.name} onClick={() => selectPart(part)}>
        {part.shortName}
      </button>
    ))}
  </div>
)
