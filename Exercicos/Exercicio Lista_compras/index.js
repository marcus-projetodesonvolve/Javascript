// Array para armazenar as tarefas
let tarefas = [];

// Selecionando os elementos do DOM
const inputTarefa = document.getElementById('nova-tarefa-input');
const adicionarBtn = document.getElementById('adicionar-btn');
const listaTarefas = document.getElementById('lista-tarefas');

// Função para renderizar as tarefas na tela
function renderizarTarefas() {
    // Limpa a lista antes de renderizar novamente
    listaTarefas.innerHTML = '';

    // Itera sobre o array de tarefas
    tarefas.forEach((tarefa, index) => {
        // Cria um elemento li para cada tarefa
        const li = document.createElement('li');
        li.classList.add('tarefa');

        // Adiciona a classe 'concluida' se o status for verdadeiro
        if (tarefa.status) {
            li.classList.add('concluida');
        }

        // Adiciona o HTML interno para o checkbox e a descrição
        li.innerHTML = `
            <input type="checkbox" data-index="${index}" ${tarefa.status ? 'checked' : ''}>
            <span class="tarefa-descricao">${tarefa.descricao}</span>
        `;

        // Adiciona um evento para o checkbox
        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            // Alterna o status da tarefa no array
            tarefas[index].status = !tarefas[index].status;
            // Re-renderiza a lista para atualizar a visualização
            renderizarTarefas();
        });

        // Adiciona o item da lista à lista principal
        listaTarefas.appendChild(li);
    });
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const descricao = inputTarefa.value.trim();

    // Verifica se a descrição não está vazia
    if (descricao !== '') {
        // Cria um novo objeto de tarefa
        const novaTarefa = {
            descricao: descricao,
            status: false // Inicializa o status como 'não concluído'
        };

        // Adiciona a nova tarefa ao array
        tarefas.push(novaTarefa);

        // Limpa o campo de input
        inputTarefa.value = '';

        // Re-renderiza a lista
        renderizarTarefas();
    }
}

// Eventos de clique e tecla para adicionar tarefas
adicionarBtn.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (e) => {
    // Adiciona a tarefa se a tecla 'Enter' for pressionada
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

// Chamada inicial para renderizar a lista (vazia no começo)
renderizarTarefas();