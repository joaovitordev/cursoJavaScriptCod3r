const escola = "Cod3r"

// pegando 4 indice da string usando a função charAt
console.log(escola.charAt(4))

// retorna null
console.log(escola.charAt(5))

// tabela ASC
console.log(escola.charCodeAt(3))

// vendo o indice que o digito está na varialvel
console.log(escola.indexOf('r'))

// pegando caracteres
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// concatenando váriaveis com strings dá pra usar o (+) com strings
console.log('Escola '.concat(escola).concat("1"))

// substituir todas palavras
console.log(escola.replace(/\w/, 'e'))

// substituir especifico
console.log(escola.replace(3, 'e'))

// transformando string em array
console.log('Ana,Maria,Pedro'.split(','))