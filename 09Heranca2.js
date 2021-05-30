//heranca 2

//Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' //nao faca isso em casa!, foi feito so para mostrar
                               //que o avo aponta para Object.prototype

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
//0 A B C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing (sombreamento)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super e usado para referenciar o prototipo)

    }
}

Object.setPrototypeOf(ferrari, carro)//funcao que estabelece relacao de objeto e prototipo
Object.setPrototypeOf(volvo, carro)//funcao que estabelece relacao de objeto e prototipo

console.log(ferrari)
// { modelo: 'F40', velMax: 324 }
console.log(volvo)
// { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status())
// V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status())
// 300Km/h de 324Km/h



