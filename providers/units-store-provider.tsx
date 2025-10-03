'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type UnitsStore, createUnitsStore } from '@/stores/unitsStore'

export type UnitsStoreApi = ReturnType<typeof createUnitsStore>

export const UnitsStoreContext = createContext<UnitsStoreApi | undefined>(
  undefined,
)

export interface UnitsStoreProviderProps {
  children: ReactNode
}

export const UnitsStoreProvider = ({
  children,
}: UnitsStoreProviderProps) => {
  const storeRef = useRef<UnitsStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createUnitsStore()
  }

  return (
    <UnitsStoreContext.Provider value={storeRef.current}>
      {children}
    </UnitsStoreContext.Provider>
  )
}

export const useUnitsStore = <T,>(
  selector: (store: UnitsStore) => T,
): T => {
  const unitsStoreContext = useContext(UnitsStoreContext)

  if (!unitsStoreContext) {
    throw new Error(`useUnitsStore must be used within UnitsStoreProvider`)
  }

  return useStore(unitsStoreContext, selector)
}