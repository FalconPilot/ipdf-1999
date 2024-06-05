import * as React from 'react'

import { GunPart, Hardpoint } from '~/types'
import { PartButton, PartButtonImage, PartButtonImageWrapper } from './styled'
import { PartsMenu } from '../styled'
import { Flex } from '~/styled'

export const ContextualMenu: React.FC<{
  hardpoint: Hardpoint
  selectPart: (part: GunPart | null) => void
}> = ({ hardpoint, selectPart }) => (
  <Flex direction='column'>
    <h3>{hardpoint.name}</h3>
    <PartsMenu>
      {hardpoint.allowEmpty && (
        <PartButton onClick={() => selectPart(null)} align='center'>
          <strong>Nothing</strong>
        </PartButton>
      )}
      {hardpoint.options.map(part => (
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
  </Flex>
)
