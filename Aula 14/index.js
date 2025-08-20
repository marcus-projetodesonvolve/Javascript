const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];

function iterarFibonacci() {
    for (let i = 0; i < fibonacci.length; i++) {
    console.log(i+1,'º item: ',fibonacci[i]);
}
}
iterarFibonacci();
console.log('--------------------------------------');

function contaAte(numero) {
    for (let conta = 1; conta <= numero; conta++)
        console.log('Contando: ', conta);
    }
contaAte(20);
console.log('--------------------------------------');
contaAte(9);
console.log('--------------------------------------');

function verificaArray(listaNumeros) {
    for (let item of listaNumeros) {
        console.log(item);
    } 
}
verificaArray(fibonacci);
console.log('--------------------------------------');

function verificaItemPorIndice(listaNumeros) {
    for (let indice in listaNumeros) {
        console.log(indice, 'º item: ', listaNumeros[indice]);
    }
}
verificaItemPorIndice(fibonacci);
console.log('--------------------------------------');

function contaPelosUm(numeroLimite) {
    let contador = 0; // contador = 0
    do {
        contador++;// contador = contador + 1
    }while (contador < numeroLimite);// condição de parada
}
contaPelosUm(1);
console.log('--------------------------------------');

function verificaSePodeLimite(numeroLimite) {
    let numero = 0;
    while (numero < numeroLimite) {
        console.log('Número: ', numero);
        numero++;
    }
}
verificaSePodeLimite(0); // não entra no loop
verificaSePodeLimite(5); // entra no loop
console.log('--------------------------------------');