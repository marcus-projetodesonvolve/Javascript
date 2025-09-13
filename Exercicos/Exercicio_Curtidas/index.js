document.addEventListener('DOMContentLoaded', () => {
        const nomesCurtidos = [];
        const inputNome = document.getElementById('nome-curtidor');
        const botaoCurtir = document.getElementById('botao-curtir');
        const paragrafoLista = document.getElementById('lista-curtidas');
        const statusMessage = document.getElementById('status-message');

        function showStatus(message, isError = false) {
            statusMessage.textContent = message;
            statusMessage.className = `status-message ${isError ? 'error' : 'success'}`;
            
            setTimeout(() => {
                statusMessage.textContent = '';
                statusMessage.className = 'status-message';
            }, 3000);
        }

        function atualizarTextoCurtidas() {
            const totalPessoas = nomesCurtidos.length;
            let texto;

            if (totalPessoas === 0) {
                texto = "Ninguém curtiu";
            } else if (totalPessoas === 1) {
                texto = `${nomesCurtidos[0]} curtiu`;
            } else if (totalPessoas === 2) {
                texto = `${nomesCurtidos[0]} e ${nomesCurtidos[1]} curtiram`;
            } else {
                const outrasPessoas = totalPessoas - 2;
                texto = `${nomesCurtidos[0]}, ${nomesCurtidos[1]} e mais ${outrasPessoas} pessoas curtiram`;
            }
            paragrafoLista.textContent = texto;
        }

        botaoCurtir.addEventListener('click', () => {
            const nome = inputNome.value.trim();

            if (!nome) {
                showStatus("Por favor, digite seu nome.", true);
                return;
            }

            if (nomesCurtidos.includes(nome)) {
                showStatus("Você já curtiu!", true);
                return;
            }

            nomesCurtidos.push(nome);
            inputNome.value = ''; // Limpa o campo de texto
            atualizarTextoCurtidas();
            showStatus("Curtiu com sucesso!", false);
        });

        inputNome.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                botaoCurtir.click();
            }
        });
    });