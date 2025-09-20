const inputNome = document.getElementById('nome-curtir');
const botaoCurtir = document.getElementById('botao-curtir');
const botaoLimpar = document.getElementById('botao-limpar');
const pListaCurtidas = document.getElementById('lista-curtidas');

// Função para carregar os nomes do localStorage
function carregarNomes() {
    const nomesJSON = localStorage.getItem('nomesCurtiram');
    return nomesJSON ? JSON.parse(nomesJSON) : [];
}

let nomesCurtiram = carregarNomes();

// Função para salvar os nomes no localStorage
function salvarNomes() {
    localStorage.setItem('nomesCurtiram', JSON.stringify(nomesCurtiram));
}

function atualizarLista() {
    let texto = '';
    const tamanho = nomesCurtiram.length;

    if (tamanho === 0) {
        texto = 'Ninguém curtiu';
    } else if (tamanho === 1) {
        texto = `${nomesCurtiram[0]} curtiu`;
    } else if (tamanho === 2) {
        texto = `${nomesCurtiram[0]} e ${nomesCurtiram[1]} curtiram`;
    } else {
        const maisPessoas = tamanho - 2;
        texto = `${nomesCurtiram[0]}, ${nomesCurtiram[1]} e mais ${maisPessoas} pessoas curtiram`;
    }

    pListaCurtidas.textContent = texto;
}

// Atualiza a lista na primeira vez que a página carrega
atualizarLista();

botaoCurtir.addEventListener('click', () => {
    const nome = inputNome.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    if (!nomesCurtiram.includes(nome)) {
        nomesCurtiram.push(nome);
        salvarNomes();
        atualizarLista();
        inputNome.value = '';
        inputNome.focus();
    } else {
        alert(`${nome} já curtiu.`);
    }
});

botaoLimpar.addEventListener('click', () => {
    const confirmar = confirm('Tem certeza que deseja limpar a lista de curtidas?');
    if (confirmar) {
        localStorage.removeItem('nomesCurtiram');
        nomesCurtiram = [];
        atualizarLista();
        alert('Lista de curtidas limpa!');
    }
});