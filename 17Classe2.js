//Classe 2

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //extends e usado para definir a heranca(prototipo) em classe
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
//Filho { sobrenome: 'Silva', profissao: 'Professor' }