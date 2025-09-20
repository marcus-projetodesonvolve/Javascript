const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const userList = document.getElementById('user-list');
const message = document.getElementById('message');

searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        message.textContent = 'Por favor, digite um nome de usuário.';
        userList.innerHTML = '';
        return;
    }

    message.textContent = 'Buscando...';
    userList.innerHTML = '';

    try {
        const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Erro na requisição à API do GitHub.');
        }

        const data = await response.json();
        const users = data.items;

        if (users.length === 0) {
            message.textContent = 'Não foram encontrados usuários para esta pesquisa.';
        } else {
            message.textContent = '';
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.classList.add('user-item');

                listItem.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}" class="user-avatar">
                    <div class="user-info">
                        <h3><a href="${user.html_url}" target="_blank">${user.login}</a></h3>
                        <p>ID: ${user.id}</p>
                    </div>
                `;
                userList.appendChild(listItem);
            });
        }

    } catch (error) {
        console.error('Erro:', error);
        message.textContent = 'Ocorreu um erro ao buscar os usuários. Tente novamente mais tarde.';
    }
});