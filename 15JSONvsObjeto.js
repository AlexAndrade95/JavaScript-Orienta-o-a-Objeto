/* JSON e um formato textual simples, sendo usado em outras linguagens como java, c#...
Objeto e formado por pares de chaves/valor , só aceita dados nao aceita funcoes por exemplo*/

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))
//{"a":1,"b":2,"c":3}

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//da erro!!!
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
//da erro!!!
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //JSON PRECISA USAR ASPAS DUPLAS ("")
//{ a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
//{ a: 1.7, b: 'string', c: true, d: {}, e: [] }