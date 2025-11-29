import { createContext, useContext, useState } from 'react'

type CountContextType = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const CountContext = createContext<CountContextType | undefined>(undefined)

export function CountProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  )
}

export function useCount() {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}
