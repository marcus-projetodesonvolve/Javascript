function chamaPrimeiro(){
    console.log('Chama essa primeiro');
}

function chamaDepois(){
    console.log('Entrou na Segunca Função')
    chamaPrimeiro();
}

chamaDepois();

function recebePrimeira(primeiraFuncao){
    primeiraFuncao();
}

recebePrimeira(chamaPrimeiro);
recebePrimeira(chamaDepois);