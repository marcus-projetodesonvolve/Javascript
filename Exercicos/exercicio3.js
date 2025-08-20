// 1️⃣ Array de objetos para armazenar os livros
let estoque = [
  { titulo: 'Dom Casmurro', autor: 'Machado de Assis', quantidade: 5 },
  { titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', quantidade: 3 }
];

// 2️⃣ Função para adicionar um livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
  const livroExistente = estoque.find(livro => livro.titulo === titulo);
  if (livroExistente) {
    console.log(` O livro "${titulo}" já está no estoque.`);
  } else {
    estoque.push({ titulo, autor, quantidade });
    console.log(` Livro "${titulo}" adicionado com sucesso.`);
  }
}

//Função para remover um livro do estoque
function removerLivro(titulo) {
  const index = estoque.findIndex(livro => livro.titulo === titulo);
  if (index !== -1) {
    estoque.splice(index, 1);
    console.log(`🗑️ Livro "${titulo}" removido do estoque.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado.`);
  }
}

//Função para atualizar a quantidade de um livro
function atualizarQuantidade(titulo, novaQuantidade) {
  const livro = estoque.find(livro => livro.titulo === titulo);
  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
}

//Função para listar todos os livros disponíveis
function listarLivros() {
  console.log('Livros disponíveis no estoque:');
  if (estoque.length === 0) {
    console.log('Nenhum livro disponível.');
  } else {
    for (const livro of estoque) {
      console.log(`- ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
    }
  }
}