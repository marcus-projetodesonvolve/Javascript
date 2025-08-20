function eDiaOuEnoite(hora) {
    let periodo = ''
    if (hora <= 18)
        periodo = 'dia';
    else
        periodo = 'noite';
    return periodo;
}

console.log(eDiaOuEnoite());
console.log(eDiaOuEnoite(11));
console.log(eDiaOuEnoite('dia'));
console.log(eDiaOuEnoite(21));
console.log('----------------------');

function eMaiorDeIdade(idade) {
        if (idade < 18)
        console.log('Menor de idade');
    else
        console.log('Maior de idade');
    
}

eMaiorDeIdade(18);
eMaiorDeIdade(17);
eMaiorDeIdade(false);
eMaiorDeIdade(true);
console.log('----------------------');

function periodoDoDia(hora) {
    if (hora < 12)
        console.log('Bom dia');
    else if (hora >= 12 && hora <= 18)
        console.log('Boa tarde');
    else
        console.log('Boa noite');
}

periodoDoDia(10);
periodoDoDia(17);
periodoDoDia(19);
periodoDoDia(25);
console.log('----------------------');

function periodoComRegra(hora) {
    if (hora >= 0 && hora <= 24)
        periodoDoDia(hora);
    else
        console.log('Hora inválida');
}

periodoComRegra(10);
periodoComRegra(17);
periodoComRegra(19);
periodoComRegra(25);
console.log('----------------------');

function menuEscolha(opcao) {
    switch (opcao) {
        case 1:
            console.log('Opção 1 selecionada');
            break;
        case 2:
            console.log('Opção 2 selecionada');
            break;
        case 3:
            console.log('Opção 3 selecionada');
            break;
        default:
            console.log('Opção inválida');
    }
}

menuEscolha(1);
menuEscolha(2);
menuEscolha(3);
menuEscolha(4);
menuEscolha('a');
console.log('----------------------');

function maiorDeIdadeSimples(idade) {
    let condicao = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
    return condicao
}

console.log(maiorDeIdadeSimples(18));
console.log(maiorDeIdadeSimples(17));
console.log('-----------------------');

function maiorDeIdadeUnario(idade) {
        return idade >= 18 && 'Maior de idade';
    
}

console.log(maiorDeIdadeUnario(18));
console.log(maiorDeIdadeUnario(17));
console.log('-----------------------');

function maiorDeIdadeCondicao(idade) {
    return idade >= 18
}
console.log(maiorDeIdadeCondicao(18));
console.log(maiorDeIdadeCondicao(17));
console.log('-----------------------');