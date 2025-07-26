const todoMundoVe = 'Todo mundo vê essa variavel de escopo Global';

function executaEscopoGlobal (){
    console.log(todoMundoVe)
};

function executaEscopoLocal(){
    const visivelEmEscopoLocal = 'Essa só é visivel dentro do bloco da função, ve essa variavel de escopo local'
    console.log(visivelEmEscopoLocal)

function chamaDentroDoEscopo(){
    console.log('dentro do escopo =>', visivelEmEscopoLocal)
    }
    chamaDentroDoEscopo()
}
executaEscopoGlobal();
executaEscopoLocal();