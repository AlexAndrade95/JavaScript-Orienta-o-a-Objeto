//Heranca 3

const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
//preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})//writable = freezer (nao pode mundar)

console.log(filha2.nome)
//Bia

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
//Bia tem cabelo preto

console.log(Object.keys(filha1))
//['nome']
console.log(Object.keys(filha2))
//['nome']

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? //Atributos do propio objeto ?
        console.log(key) : console.log(`Por heranca: ${key}`)
}
//nome 
//Por heranca: corCabelo