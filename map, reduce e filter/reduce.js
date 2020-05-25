const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somar(a, b) {
    return a + b
}

// passando valor inicial (acumulador, elemento)
console.log(numeros.reduce(somar, 1000))

// sem valor inicial ele pega por padrão o primeiro item do array como acumulador
console.log(numeros.reduce(somar))

function media(acc, num) {
    // ver a logica sendo feita passo a passo
    console.log(acc)
    const novoTotal = acc.total + num
    const novaQtde = acc.qtde + 1
    return {
        total: novoTotal,
        qtde: novaQtde,
        media: novoTotal / novaQtde
    }
}

const valorInicial = {total: 0, qtde: 0, media: 0}
const valorFinal = numeros.reduce(media, valorInicial)

console.log(valorFinal.media)