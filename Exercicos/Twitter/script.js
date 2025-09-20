const postForm = document.getElementById('post-form');
const postTextarea = document.getElementById('post-text');
const postsList = document.getElementById('posts-list');

// Variáveis de usuário fixas para este exemplo
const username = "DevGato";
const userAvatar = "https://i.pravatar.cc/150?u=devgato"; // Avatar aleatório

// Array que armazena os posts. Para persistência, você usaria o localStorage.
let posts = [];

// Função assíncrona para buscar uma imagem aleatória de gatinho
async function getCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        return data[0].url; // Retorna a URL da imagem
    } catch (error) {
        console.error('Erro ao buscar imagem de gatinho:', error);
        return null; // Retorna null em caso de erro
    }
}

// Função para renderizar os posts na tela
function renderPosts() {
    postsList.innerHTML = ''; // Limpa o feed antes de renderizar
    posts.forEach((post, index) => {
        const postItem = document.createElement('li');
        postItem.classList.add('post-item');

        const date = new Date(post.date).toLocaleString();

        postItem.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.username}" class="user-avatar">
                <div class="user-info">
                    <span class="username">${post.username}</span>
                    <span class="post-date">${date}</span>
                </div>
            </div>
            <p class="post-text">${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Gatinho fofo" class="post-image">` : ''}
            <div class="post-actions">
                <button class="like-button" data-index="${index}">
                    ❤️ <span>${post.likes}</span>
                </button>
            </div>
        `;
        postsList.appendChild(postItem);
    });
    addLikeListeners();
}

// Função para adicionar os listeners nos botões de curtir
function addLikeListeners() {
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.index;
            posts[index].likes++;
            renderPosts(); // Re-renderiza para atualizar a contagem
        });
    });
}

// Listener para o formulário de postagem
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const postText = postTextarea.value.trim();

    if (postText === '') {
        alert('O texto da postagem não pode ser vazio!');
        return;
    }

    const catImage = await getCatImage(); // Espera a imagem do gatinho

    const newPost = {
        date: new Date(),
        username: username,
        avatar: userAvatar,
        text: postText,
        image: catImage,
        likes: 0
    };

    // Adiciona o novo post no início do array
    posts.unshift(newPost);
    
    postTextarea.value = ''; // Limpa a textarea
    renderPosts(); // Atualiza a lista de posts
});

// Renderiza a lista inicial (vazia) ao carregar a página
document.addEventListener('DOMContentLoaded', renderPosts);