import Calculator from '@renderer/classes/Calculator'
import { ButtonsTecladoProps } from './types'
import { useState } from 'react'

export default function ButtonsTeclado({
  numero,
  setNumero,
  calculo,
  setCalculo,
  typeAction = 'number',
  ...props
}: ButtonsTecladoProps): JSX.Element {
  const [substituir, setSubstituir] = useState<boolean>(true)

  function calcular(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    substituir: boolean,
    setSubstituir: React.Dispatch<React.SetStateAction<boolean>>
  ): void {
    const value_button = e.currentTarget.value
    switch (typeAction) {
      case 'number':
        if (substituir) {
          setNumero(value_button)
          setSubstituir(false)
          console.log(substituir)
        } else if (numero === '0') {
          setNumero(value_button)
          setSubstituir(false)
        } else {
          setNumero(numero + value_button)
        }
        // if (numero === '0' || (calculo !== '' && numero.length === 1 && value_button === numero)) {
        //   setNumero(value_button)
        // } else {
        //   setNumero(numero + value_button)
        // }
        break

      case 'calculation':
        setCalculo(numero + value_button)
        setSubstituir(true)
        console.log(substituir)
        break

      case 'equals': {
        const calc = new Calculator(calculo + numero)
        setCalculo(calculo + numero + value_button)
        switch (calc.tipo) {
          case 'adicao':
            setNumero(String(calc.somar()))
            break
          case 'divisao':
            setNumero(String(calc.dividir()))
            break
          case 'multiplicacao':
            setNumero(String(calc.multiplicar()))
            break
          case 'raizquadrada':
            setNumero(String(calc.raizquadrada()))
            break
          case 'subtracao':
            setNumero(String(calc.subtrair()))
            break
          default:
            break
        }
        setSubstituir(true)
        console.log(substituir)
        break
      }
      case 'operation':
        break

      case 'backspace':
        if (numero.length > 1) {
          setNumero(numero.substring(0, numero.length - 1))
        } else {
          setNumero('0')
          setSubstituir(true)
        }
        break
      case 'clear':
        setCalculo('')
        setNumero('0')
        setSubstituir(true)
        break

      default:
        break
    }
    return
  }

  return <button onClick={(e) => calcular(e, substituir, setSubstituir)} {...props} />
}
