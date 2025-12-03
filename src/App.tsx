import { Button } from '@/components/ui/button'
import Layer from './components/Layer'

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center'>
      <Layer>
        <Button>Click me</Button>
      </Layer>
    </div>
  )
}

export default App
