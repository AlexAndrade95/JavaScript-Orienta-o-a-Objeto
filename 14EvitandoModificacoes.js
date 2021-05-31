//Evitando Modificacoes

//Object.preventExtensions
const produto = Object.preventExtensions({ //Previne extender os atributos dos objetos
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))
//Extensivel: false
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)
//{ nome: 'Borracha', preco: 1.99 }

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }//selado = Nao consegue adiconar e excluir , somente modificar
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
//Selado: true
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
//{ nome: 'Juliana', idade: 29 }

//Object.freeze = selado + valores constantes

