export interface ButtonsTecladoProps {
  setCalculo: React.Dispatch<React.SetStateAction<string>>
  calculo: string
  setNumero: React.Dispatch<React.SetStateAction<string>>
  numero: string
  value?: string | number | readonly string[]
  className?: string
  typeAction?:
    | 'number'
    | 'operation'
    | 'calculation'
    | 'clear'
    | 'equals'
    | 'backspace'
    | 'comma'
    | 'trade-sinal'
  type?: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
}
