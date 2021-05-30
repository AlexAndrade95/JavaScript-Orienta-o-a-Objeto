/* heranca 1
criar mecanismos para reutilizar os codigos ( para nao usar o ctrl+c ctrl+V)
 */

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)
//undefined
console.log(ferrari.__proto__) //dois underline __proto__ para procurar o objeto "pai"
//{}
console.log(ferrari.__proto__ === Object.prototype)
//true
console.log(volvo.__proto__ === Object.prototype)
//true
console.log(Object.prototype.__proto__ === null)
//true

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
//function 
//function
console.log(Object.prototype, MeuObjeto.prototype)
//{} 
//meuobjeto {}