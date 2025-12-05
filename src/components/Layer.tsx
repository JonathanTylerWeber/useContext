import type { ReactNode } from 'react'

export default function Layer({ children }: { children: ReactNode }) {
  return (
    <div className='bg-amber-400 p-6'>
      <p>This is a layer</p>
      {children}
    </div>
  )
}
