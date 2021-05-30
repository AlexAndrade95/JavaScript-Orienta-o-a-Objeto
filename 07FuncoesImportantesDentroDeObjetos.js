//Funcoes importantes dentro de objetos

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //pegara todas as chaves 
//[ 'nome', 'idade', 'peso' ]

console.log(Object.values(pessoa)) //pegara todos os valores
//[ 'Rebeca', 2, 13 ]

console.log(Object.entries(pessoa))//pegara todos os registros
//[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
/* nome: Rebeca
   idade: 2
   peso: 13
 */

Object.defineProperty(pessoa, 'dataNascimento', { //para definir caracteristicas das propriedades 
    enumerable: true, //caracteristicas:
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
//01/01/2019
console.log(Object.keys(pessoa))
//[ 'nome', 'idade', 'peso', 'dataNascimento' ]

//Object.assign (ECMAScript 2015), soma todos os objetos em um
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
//{ a: 4, b: 2, c: 3 }