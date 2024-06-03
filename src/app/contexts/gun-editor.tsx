import * as React from 'react'

import { GunCore } from '~/types'

type GunEditorState = readonly [
  GunEditorData: {
    gun: GunCore | null
    menuToggler: (() => void) | null
  },
  GunEditorActions: {
    setGun: (gun: GunCore) => void
    setMenuToggler: (value: (() => void) | null) => void
  },
]

const initialState: GunEditorState[0] = {
  gun: null,
  menuToggler: null,
}

const GunEditorValueCtx = React.createContext<GunEditorState>([
  initialState,
  {
    setGun: () => {},
    setMenuToggler: (_: (() => void) | null) => {},
  },
])

GunEditorValueCtx.displayName = 'GunEditor'

export const GunEditorContext: React.FC<{
  children: React.ReactElement,
}> = ({ children }) => {
  const [state, setState] = React.useState(initialState)

  const setGun = (newGun: GunCore) => {
    setState({
      ...state,
      gun: newGun
    })
  }

  const setMenuToggler = (value: (() => void) | null) => {
    setState({
      ...state,
      menuToggler: value,
    })
  }

  const contextValue: GunEditorState = React.useMemo(() => [
    state,
    {
      setGun,
      setMenuToggler,
    },
  ], [state])

  return (
    <GunEditorValueCtx.Provider value={contextValue}>
      {children}
    </GunEditorValueCtx.Provider>
  )
}

export const useGunEditor = () => {
  const editor = React.useContext(GunEditorValueCtx)

  if (!editor) {
    throw new Error('useGunEditor must be used withing a GunEditorContext')
  }

  return editor
}
