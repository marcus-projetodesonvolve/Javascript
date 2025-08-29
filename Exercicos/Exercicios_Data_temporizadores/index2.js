// 1. Defina uma função para calcular o tempo restante até uma data futura
function calcularTempoRestante(dataFutura) {
  const dataAtual = new Date();
  const diferenca = dataFutura - dataAtual;

  // Lógica para lidar com datas no passado
  if (diferenca < 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    };
  }

  // Cálculos para converter a diferença de milissegundos para dias, horas, minutos e segundos
  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  return {
    dias,
    horas,
    minutos,
    segundos
  };
}

// Defina a data futura para a contagem regressiva (exemplo: 31 de dezembro de 2025)
const dataAlvo = new Date('December 31, 2025 23:59:59');

// 2. Defina uma função para atualizar o temporizador na tela
function atualizarTemporizador() {
  const tempoRestante = calcularTempoRestante(dataAlvo);

  // Seleciona os elementos HTML onde o tempo será exibido
  const diasSpan = document.getElementById('dias');
  const horasSpan = document.getElementById('horas');
  const minutosSpan = document.getElementById('minutos');
  const segundosSpan = document.getElementById('segundos');

  // Adiciona um zero à esquerda se o número for menor que 10
  const formatarNumero = (numero) => numero < 10 ? '0' + numero : numero;

  diasSpan.textContent = formatarNumero(tempoRestante.dias);
  horasSpan.textContent = formatarNumero(tempoRestante.horas);
  minutosSpan.textContent = formatarNumero(tempoRestante.minutos);
  segundosSpan.textContent = formatarNumero(tempoRestante.segundos);

  // Se a contagem regressiva terminou, limpa o intervalo para parar a atualização
  if (tempoRestante.dias === 0 && tempoRestante.horas === 0 && tempoRestante.minutos === 0 && tempoRestante.segundos === 0) {
    clearInterval(temporizadorInterval);
    document.getElementById('mensagem').textContent = 'A contagem regressiva terminou!';
  }
}

// 3. Use setInterval para atualizar o temporizador a cada segundo
// A função atualizarTemporizador é chamada uma vez no início para evitar um atraso inicial
atualizarTemporizador();
const temporizadorInterval = setInterval(atualizarTemporizador, 1000);