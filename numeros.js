const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso1)

// verificar se é inteiro ou não
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.234
const avaliacao2 = 6.987

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// toFixed definir casas decimais
console.log(media.toFixed(2))

// transformar valor em string sem alterar o valor pq é uma const
console.log(media.toString())

// converter para binario
console.log(media.toString(2))

//tipo da variavel
console.log(typeof media)

