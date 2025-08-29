//Crie um sistema simples para gerenciar o estoque de uma livraria. O sistema deve permitir adicionar livros ao estoque, remover livros, 
// atualizar a quantidade de livros e listar todos os livros disponíveis.
// Requisitos:
//1 - Defina um array de objetos para armazenar os livros no estoque.
//* Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade.
const estoque = [  
    { id: 2035, titulo: 'Dom Casmurro', autor: 'Machado de Assis', quantidade: 5 },
    { id: 2036, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', quantidade: 3 },
    { id: 2037, titulo: 'O Alquimista', autor: 'Paulo Coelho', quantidade: 7 },
];


//2 - Crie funções para gerenciar o estoque:
//* adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque.
const adicionarLivro = (id, titulo, autor, quantidade) => {
    estoque.push({ 
        id, 
        titulo, 
        autor, 
        quantidade });
}
adicionarLivro(2038, 'A Metamorfose', 'Franz Kafka', 4);
console.log(estoque);

//* removerLivro(titulo) - Remove um livro do estoque pelo título.
removerLivro = (idDoLivro) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro);
    if (existeIdNoEstoque) {
        for (let indice = 0; indice < estoque.length; indice++) {
            if (estoque[indice].id === idDoLivro) {
                console.log(`Livro com ID ${idDoLivro} removido do estoque.`);
                estoque.splice(indice, 1);
                break;
            }
        }
    }
    else {
        console.log(`Livro com ID ${idDoLivro} não encontrado no estoque.`);
    }
}
removerLivro(2036);
console.log(estoque);
removerLivro(9999);

//* atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.
atualizarQuantidade = (idDoLivro, novaQuantidade) => {
    const livro = estoque.find(livro => livro.id === idDoLivro);
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${livro.titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Livro com ID ${idDoLivro} não encontrado no estoque.`);
    }
}
atualizarQuantidade(2037, 10);
//* listarLivros() - Lista todos os livros no estoque.
listarLivros = () => {
    console.log(estoque);
}  
//3 - Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.

listarLivros();


//4 - Use laços de repetição para iterar sobre o array de livros quando necessário.
function listarLivros() {
    if (estoque.length === 0) {
        console.log("Nenhum livro no estoque.");
    } else {
        console.log("Livros disponíveis no estoque:");
        for (const livro of estoque) {
            console.log(`ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        }
    }
}

listarLivros();
//4 - Use laços de repetição para iterar sobre o array de livros quando necessário.


