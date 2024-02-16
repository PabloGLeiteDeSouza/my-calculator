import Teclado from './components/Teclado'
import Display from './components/Display'
import { useState } from 'react'

function App(): JSX.Element {
  const [numero, setNumero] = useState<string>('0')
  const [calculo, setCalculo] = useState<string>('')

  return (
    <div>
      <div className="w-full h-screen px-1 py-2">
        <div className="w-full">
          <Display calculo={calculo} numero={numero} />
        </div>
        <div className="w-full">
          <Teclado
            numero={numero}
            setNumero={setNumero}
            calculo={calculo}
            setCalculo={setCalculo}
          />
        </div>
      </div>
    </div>
  )
}

export default App
