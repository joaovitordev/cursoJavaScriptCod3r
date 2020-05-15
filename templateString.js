const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const template = `Olá ${nome}!`
console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

// usando função com template string
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
