const meusDados = {
    nome: 'Marcus',
    sobrenome: 'Santos',
    moraNoBrasil: true,
    idade: 36,
    pegaDocumento: function () {
        console.log('CPF: 000.000.000-00');
    }
}

//Verificar se o objeto possui uma propriedade
function verificaValor(valorDaChave) {
    const valorDoObjeto = Object.values(meusDados)
    console.log(valorDoObjeto)
    return valorDoObjeto.includes(valorDaChave);
}

console.log(verificaValor('Marcus')); // true
console.log(verificaValor('Rodrigues')); // false

console.log(meusDados['moranoBrasil'])// undefined, não existe essa propriedade
console.log('--------------------------------------');

function verificaChave(nomeDaChave) {
    const chavesDoObjeto = Object.keys(meusDados);
    console.log(chavesDoObjeto);
    //return chavesDoObjeto.includes(chave);
}
verificaChave();
console.log('--------------------------------------');

function verificaChave2(nomeDaChave1) {
    const chavesDoObjeto2 = Object.keys(meusDados); // obtém as chaves do objeto
    return chavesDoObjeto2.includes(nomeDaChave1); // retorna true ou false
}
console.log(verificaChave2('nome')); // true
console.log(verificaChave2('sexo')); // false
meusDados.pegaDocumento(); // CPF: 000.000.000-00
console.log('--------------------------------------');
console.error('Exemplo de erro'); // Exemplo de erro
console.warn('Exemplo de aviso'); // Exemplo de aviso
console.info('Exemplo de informação'); // Exemplo de informação