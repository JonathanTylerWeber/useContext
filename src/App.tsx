import { Button } from '@/components/ui/button'
import Layer from './components/Layer'
import { CountProvider } from './contexts/CountContext'

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center'>
      <CountProvider>
        <Layer>
          <Button>Click me</Button>
        </Layer>
      </CountProvider>
    </div>
  )
}

export default App
