import { Funcionario } from './funcionario'

console.log('ok')

const f1 = new Funcionario('Mark', 'desenvolvedor', 1200, 2)
console.log(f1)
console.log(f1.salario)
const f2 = new Funcionario('Bill', 'analista', 2000, 2)
console.log(f2.salario)

// como fica?
const f3 = new Funcionario('Barbara', 'CEO', 2000, 2)
console.log(f3.salario)
