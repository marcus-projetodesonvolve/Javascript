const meusDados = {
    nome: 'Marcus',
    sobrenome: 'Santos',
    moraNoBrasil: true,
    idade: 36
}
console.log(meusDados)
console.log(meusDados.nome)
console.log(meusDados['nome']) // mesma coisa que a linha de cima

function exibeDados2(dados2){
    return meusDados[dados2];
}
console.log(exibeDados2('idade'))
console.log(exibeDados2('moraNoBrasil'))
console.log(exibeDados2('sobrenome'))
console.log(exibeDados2('moranoBrasil')) // erro, não existe essa propriedade

