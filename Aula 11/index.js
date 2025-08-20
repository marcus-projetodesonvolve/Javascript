const cores = ['Preto', 'Branco', 'Vermelho', 'Azul', 'Verde', 'Amarelo', 'Roxo', 'Laranja'];
console.log(cores);
console.log(cores[0]);
console.log(cores[4]);
console.log(cores[cores.length - 1]); // Exibe o último elemento do array
console.log('Quantidade de cores:', cores.length);
console.log(cores.indexOf('Amarelo')); // Exibe o índice do elemento 'Amarelo'
console.log(cores.indexOf('Rosa')); // Exibe -1, pois 'Rosa' não está no array
console.log(cores.includes('Roxo')); // Verifica se 'Roxo' está no array
console.log(cores.includes('Rosa')); // Verifica se 'Rosa' está no array
cores.push('Rosa'); // Adiciona 'Rosa' ao final do array
console.log(cores);
console.log(cores.length); // Exibe a nova quantidade de cores
cores.pop(); // Remove o último elemento do array
console.log(cores.length); // Exibe a quantidade de cores após a remoção
console.log(cores);
cores.unshift('Cinza'); // Adiciona 'Cinza' no início do array
console.log(cores);
cores.shift(); // Remove o primeiro elemento do array
console.log(cores);
cores.push('Marrom', 'Bege'); // Adiciona 'Marrom' e 'Bege' ao final do array
console.log(cores);
console.log(cores.length); // Exibe a quantidade de cores após as adições

function removeCores(nomeDaCor) {
    const posicaoDaCor = cores.indexOf(nomeDaCor);
    if (posicaoDaCor >= 0) { // Verifica se a cor existe no array
        console.log(`Removendo a cor: ${nomeDaCor}`); 
        cores.splice(posicaoDaCor, 1); // Remove a cor do array
        }
    console.log(cores);
}

removeCores('Roxo'); // Remove 'Roxo' do array
removeCores('Azul'); // Remove 'Azul' do array
console.log(cores.length); // Exibe a quantidade de cores após as remoções
console.log(cores); // Exibe o array final de cores
removeCores('Marrom'); // Tenta remover 'Marrom', que não está no array
console.log(cores); // Exibe o array final de cores após a tentativa de remoção