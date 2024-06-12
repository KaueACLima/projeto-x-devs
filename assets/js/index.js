//OBJETIVO 1  - quando clivarmos na seta avançar temos que mostrar o proximo
//cartão da lista

//Passo 1 - pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
//Passo 1 (OB2) - pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
//Passo 3 (OB1) - Fazer aparecer o próximo cartão da lista, adicionando a classe selecionado
const cartoes = document.querySelectorAll(".cartao");

//Passo 2 -  identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
  if (ehUltimoCartao) return;

  //Passo 4 - Buscar o cartão que está selecionado e esconder
  esconderCartoesSelecionado();

  cartaoAtual++;
  mostrarCartao();
});

//OBJETIVO 2  - quando clicarmos na seta voltar temos que apresentar o cartão
//anteterior da lista
//Passo 2 -  identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
  if (ehPrimeiroCartao) return;
  //Passo 4 - Buscar o cartão que está selecionado e esconder
    esconderCartoesSelecionado();

  //Passo 3 - Fazer aparecer  cartão anterior da lista
  cartaoAtual--;
  mostrarCartao();
});
function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

