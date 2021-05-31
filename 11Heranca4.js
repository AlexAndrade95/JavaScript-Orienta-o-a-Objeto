//Heranca 4 

function MeuObjeto() {}
console.log(MeuObjeto.prototype)
//MeuObjeto {}

const obj1 = new MeuObjeto //funcao
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
//true //__proto__ a partir de uma funcao construtora aponta para a propria
console.log(MeuObjeto.prototype === obj1.__proto__)
//true //obj1 === (estritamente igual) obj2 

MeuObjeto.prototype.nome = 'Anonimo' //objeto
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome e ${this.nome}!`)
}

obj1.falar()
//Bom dia! Meu nome e Anonimo!

obj2.nome = 'Rafael'
obj2.falar()
//Bom dia! Meu nome e Rafael!

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()
//Bom dia! meu nome e obj3!

//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
//true
console.log(MeuObjeto.__proto__ === Function.prototype)
//true
console.log(Function.prototype.__proto__ === Object.prototype)
//true
console.log(Object.prototype.__proto__ === null)
//true