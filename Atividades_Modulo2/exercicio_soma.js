/* const Soma = (num1,num2) => num1 + num2
const Subtrai = (num1,num2) => num1 - num2
const Multiplica = (num1,num2) => num1 * num2
const Divide = (num1,num2) => num1 / num2
*/

function Soma (num1,num2){
    return num1 + num2;
}

function Subtrai (num1,num2){
    return num1 - num2
}

function Multiplica (num1,num2){
    return num1 * num2
}

function Divide (num1,num2){
    return num1 / num2
}

const mostraResultado = (num1,num2) => {
    console.log(`Resultado da Soma entre ${num1} e ${num2}`,Soma(num1,num2));
    console.log(`Resultado da Subtração entre ${num1} e ${num2}`,Subtrai(num1,num2));
    console.log(`Resultado da Multiplicação entre ${num1} e ${num2}`,Multiplica(num1,num2));
    console.log(`Resultado da Divisão entre ${num1} e ${num2}`,Divide(num1,num2))
}

mostraResultado(10,7);