import * as React from 'react'

import { GunPart, Hardpoint } from '~/types'
import { PartButton, PartButtonImage, PartButtonImageWrapper } from './styled'
import { PartsMenu } from '../styled'

export const ContextualMenu: React.FC<{
  hardpoint: Hardpoint
  forbiddenList: string[]
  selectPart: (part: GunPart | null) => void
}> = ({ hardpoint, forbiddenList, selectPart }) => (
  <PartsMenu>
    {hardpoint.allowEmpty && (
      <PartButton onClick={() => selectPart(null)} align='center'>
        <strong>Nothing</strong>
      </PartButton>
    )}
    {hardpoint.options.filter(part => !forbiddenList.includes(part.id)).map(part => (
      <PartButton
        key={part.name} onClick={() => selectPart(part)}
        direction='column'
        align='center'
        justify='flex-start'
      >
        <strong>{part.shortName}</strong>
        <PartButtonImageWrapper align='center' justify='center'>
          <PartButtonImage
            src={part.asset.src}
            height={part.asset.height / 2}
            width={part.asset.width / 2}
          />
        </PartButtonImageWrapper>
      </PartButton>
    ))}
  </PartsMenu>
)
