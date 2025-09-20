const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Função para carregar as tarefas do localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return tasks;
}

// Função para salvar as tarefas no localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para renderizar as tarefas na página
function renderTasks() {
    const tasks = loadTasks();
    taskList.innerHTML = ''; // Limpa a lista antes de renderizar

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        if (task.status) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <div class="task-content">
                <input type="checkbox" ${task.status ? 'checked' : ''} data-index="${index}">
                <span class="task-description">${task.description}</span>
            </div>
            <button class="delete-button" data-index="${index}">Excluir</button>
        `;
        taskList.appendChild(li);
    });

    // Adiciona os event listeners após a renderização
    addEventListeners();
}

// Função para adicionar os listeners de eventos aos checkboxes e botões de exclusão
function addEventListeners() {
    const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    const deleteButtons = document.querySelectorAll('.delete-button');

    // Listener para o checkbox (marcar como concluída)
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const index = e.target.dataset.index;
            const tasks = loadTasks();
            tasks[index].status = e.target.checked;
            saveTasks(tasks);
            renderTasks();
        });
    });

    // Listener para o botão de exclusão
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            let tasks = loadTasks();
            tasks = tasks.filter((task, i) => i != index);
            saveTasks(tasks);
            renderTasks();
        });
    });
}

// Listener para o botão de adicionar tarefa
addButton.addEventListener('click', () => {
    const description = taskInput.value.trim();
    if (description !== '') {
        const newTask = {
            description: description,
            status: false
        };
        const tasks = loadTasks();
        tasks.push(newTask);
        saveTasks(tasks);
        taskInput.value = ''; // Limpa o campo
        renderTasks();
    }
});

// Renderiza a lista de tarefas ao carregar a página
document.addEventListener('DOMContentLoaded', renderTasks);