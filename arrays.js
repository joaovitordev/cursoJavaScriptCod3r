// criando array simples
const valores = [7.7, 8.9, 9.2, 7.8]

// acessando valores do array
console.log(valores[0], valores[3])

// se vc acessar um valor de indice que não existe ele retorna undefined
console.log(valores[4])

// setando valores em um array já criado
valores[4] = 10
console.log(valores)

// contando elementos do  array
console.log(valores.length)

// passando elementos pro array com o push
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// tirando valores do array
console.log(valores.pop())
delete valores[0]
console.log(valores)

// o array é um tipo object
console.log(typeof valores)