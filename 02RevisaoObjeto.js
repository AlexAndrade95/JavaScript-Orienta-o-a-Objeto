//Revisao de objeto

//objeto = colecao dinamica(adicionar e remover) de pares chaves/valor

//colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
ou
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
//{ nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
delete produto.preco
delete produto['marca do produto']
console.log(produto)
//{ nome: 'Cadeira' }

//Objeto dentro de objeto
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ //Array de objetos []
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)
/*   {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: { logradouro: 'Av Gigante', numero: 1000 }
  },
  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
  calcularValorSeguro: [Function: calcularValorSeguro]
}
*/

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
/*  {
  modelo: 'A4',
  valor: 89000,
  proprietario: { nome: 'Raul', idade: 56 },
  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ]
}
 */

[ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ]

console.log(carro.condutores)
// undefined
console.log(carro.condutores.length) 
// 2 // pq a linha 58 foi comentada  ( // delete carro.condutores)