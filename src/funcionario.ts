export class Funcionario {
  readonly nome: string
  base: number
  nivel: number
  cargo: string

  constructor(nome: string, cargo: string,
    base: number, nivel: number = 1) {
    this.nome = nome
    this.cargo = cargo
    this.base = base
    this.nivel = nivel
  }

  calculaProdutividade():void{}

  get salario() { // getter/propriedade
    let beneficios = 0
    if (this.cargo === 'dev') {
      beneficios = this.nivel * 0.1 * this.base
    }
    if (this.cargo === 'analista') {
      beneficios = this.base * 0.5 +
        (this.nivel * 0.2 * this.base)
    }
    if (this.cargo === 'gp') {
      beneficios = this.base * 2
    }
    return this.base + beneficios
  }
}
