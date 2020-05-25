const produtos = [
    { nome: '....', preço: 23.59, desconto: 0.3 },
    { nome: '....', preço: 23.59, desconto: 0.3 },
    { nome: '....', preço: 23.59, desconto: 0.3 },
    { nome: '....', preço: 23.59, desconto: 0.3 }
]

function getCusto(precoComDesconto) {
    return parseInt(precoComDesconto * 0.3)
}

function getPrecoComDesconto(produto) {
    return produto.preco * (1 - produto.desconto)
}

function altoCusto(produto) {
    return produto.preco >= 50
}

const resultado = produtos
    .filter(altoCusto)
    .map(getPrecoComDesconto)
    .map(getCusto)
console.log(resultado)