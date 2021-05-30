//Criando objetos 

//usando a notacao literal
const obj1 = {} //colchetes
console.log(obj1)
//{}

//Object em JS (New object)
console.log(typeof Object, typeof new Object)
//function object 
const obj2 = new Object
console.log(obj2)
//{}

//Funcoes construtoras
function Produto(nome, preco, desc) {  //(nome, preco, desc) atributos privados (nao visiveis)
    this.nome = nome //this deixa o atributo pulblico (visivel) !!
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
//6.7915 2249.2425

//Funcao Factory (funcao que cria alguma coisa)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
//6916 11020

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
//[Object: null prototype] { nome: 'Ana' }

//Um funcao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
//Sou um JSON