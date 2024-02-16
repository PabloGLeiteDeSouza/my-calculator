import { FaChevronDown } from 'react-icons/fa6'
import { LiaBackspaceSolid } from 'react-icons/lia'
import ButtonsTeclado from './ButtonsTeclado'

interface TecladoProps {
  numero: string
  setNumero: React.Dispatch<React.SetStateAction<string>>
  calculo: string
  setCalculo: React.Dispatch<React.SetStateAction<string>>
}

export default function Teclado({
  numero,
  setNumero,
  calculo,
  setCalculo
}: TecladoProps): JSX.Element {
  return (
    <>
      <div>
        <div id="buttons-components" className="grid grid-rows-1 grid-cols-6 mb-1">
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn-sm hover:bg-gray-600 rounded-sm"
            type="button"
          >
            MV
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn-sm hover:bg-gray-600 rounded-sm"
            type="button"
          >
            MR
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn-sm hover:bg-gray-600 rounded-sm"
            type="button"
          >
            M+
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn-sm hover:bg-gray-600 rounded-sm"
            type="button"
          >
            M-
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn-sm hover:bg-gray-600 rounded-sm"
            type="button"
          >
            MS
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn-sm hover:bg-gray-600 rounded-sm flex flex-row items-center justify-center"
            type="button"
          >
            M <FaChevronDown size={10} />
          </ButtonsTeclado>
        </div>
        <div className="grid grid-cols-4 grid-row gap-[2px]">
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn btn-lg"
          >
            %
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn btn-lg"
          >
            CE
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn btn-lg"
            typeAction="clear"
          >
            C
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            type="button"
            className="btn btn-lg"
            typeAction="backspace"
          >
            <LiaBackspaceSolid />
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            type="button"
            className="btn btn-lg"
            value={"1/"}
            typeAction="operation"
          >
            1/x
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn btn-lg"
          >
            x²
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn btn-lg"
          >
            ²√x
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={'/'}
            className="btn btn-lg"
            typeAction="calculation"
          >
            ÷
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={7}
            className="btn btn-lg"
          >
            7
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={8}
            className="btn btn-lg"
          >
            8
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={9}
            className="btn btn-lg"
          >
            9
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            className="btn btn-lg"
            value={"*"}
            typeAction="calculation"
          >
            x
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={4}
            className="btn btn-lg"
          >
            4
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={5}
            className="btn btn-lg"
          >
            5
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={6}
            className="btn btn-lg"
          >
            6
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={'-'}
            className="btn btn-lg"
            typeAction="calculation"
          >
            -
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={1}
            className="btn btn-lg"
          >
            1
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={2}
            className="btn btn-lg"
          >
            2
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={3}
            className="btn btn-lg"
          >
            3
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={'+'}
            className="btn btn-lg"
            typeAction="calculation"
          >
            +
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={['+', '-']}
            className="btn btn-lg"
            typeAction="trade-sinal"
          >
            +/-
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={0}
            className="btn btn-lg"
          >
            0
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={','}
            className="btn btn-lg"
            typeAction="comma"
          >
            ,
          </ButtonsTeclado>
          <ButtonsTeclado
            calculo={calculo}
            setCalculo={setCalculo}
            numero={numero}
            setNumero={setNumero}
            value={'='}
            typeAction="equals"
            className="btn btn-primary btn-lg"
          >
            =
          </ButtonsTeclado>
        </div>
      </div>
    </>
  )
}
