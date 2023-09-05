const btnSortear = document.querySelector('.sortear');
// btnSortear = ativa o javaScript
const textarea = document.querySelector('textarea');
// textarea = campo que o usario irá informar os nomes
const tagResultado = document.querySelector('.resultado p');
// tagResultado = onde vamos mostrar o resultado 
const popUpResultado = document.querySelector('.resultado');
// popUpResultado = para pegar o resultado 

function pegarDadosFormulario() {
    const valorCampo = textarea.value
    // pega o texto digitado pelo usuário
    const listaNomes = valorCampo.split(",");
    // separa os nomes pela vírgula
    const tamanhoArray = listaNomes.length
    // conta quantos nomes, a biblioteca length conta o tamanho da string 
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray);
    // gerar um número aleatório correspondente a posição de um nome
    const nome = listaNomes[posicaoNome]
    // recebe o nome sorteado

    mostreResultado(nome);
    textarea.value = ""
}

btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNumeroAleatorio(tamanhoArray) {
    return Math.floor(Math.random()*(tamanhoArray-0)+0);
    // O tamanhoArray guarda a quantidade de nomes que vamos sortear, e assim, usando Math.random vamos escolher um número aleatório dentro desse intervalo.
}

function mostreResultado(nome) {
    tagResultado.innerHTML = `Resultado: <br> ${nome}`
    popUpResultado.classList.add("Resultado")
}
