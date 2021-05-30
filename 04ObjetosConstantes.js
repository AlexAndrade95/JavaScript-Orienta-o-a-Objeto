/* Objetos constantes 
Object.freeze */

//pessoa -> 123 -> {...} //123 é o endereco de memoria que continua o mesmo
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)
//{ nome: 'Pedro' }

//pessoa -> 456 -> {...} //endereco de memoria
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //congelar o objeto (nao conseguira mexer mais no objeto)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
//{ nome: 'Pedro' }
console.log(pessoa)
//Pedro
//{ nome: 'Pedro' }

const pessoaConstante = Object.freeze({ nome: 'Joao' }) //para criar um objeto constante
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
//{ nome: 'Joao' }