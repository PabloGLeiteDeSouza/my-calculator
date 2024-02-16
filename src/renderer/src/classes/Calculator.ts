class Calculator {
  valor: string | undefined
  valor1: string | undefined
  tipo: 'adicao' | 'subtracao' | 'multiplicacao' | 'divisao' | 'raizquadrada' | undefined

  constructor(value: string) {
    if (value.includes('+')) {
      this.valor = value.split('+')[0]
      this.valor1 = value.split('+')[1]
      this.tipo = 'adicao'
    }
    if (value.includes('-')) {
      this.valor = value.split('-')[0]
      this.valor1 = value.split('-')[1]
      this.tipo = 'subtracao'
    }
    if (value.includes('/')) {
      this.valor = value.split('/')[0]
      this.valor1 = value.split('/')[1]
      this.tipo = 'divisao'
    }
    if (value.includes('*')) {
      this.valor = value.split('*')[0]
      this.valor = value.split('*')[1]
      this.tipo = 'multiplicacao'
    }
    if (value.includes('√')) {
      this.valor = value.replace('√', '')
      this.tipo = 'raizquadrada'
    }
  }
  somar(): number {
    return Number(this.valor) + Number(this.valor1)
  }
  subtrair(): number {
    return Number(this.valor) - Number(this.valor1)
  }
  multiplicar(): number {
    return Number(this.valor) * Number(this.valor1)
  }
  dividir(): number {
    return Number(this.valor) / Number(this.valor1)
  }

  raizquadrada(): number {
    return Math.sqrt(Number(this.valor))
  }
}

export default Calculator
