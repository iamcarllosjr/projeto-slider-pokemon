//PEGANDO ELEMENTO NO HTML PELA CLASSE "CARTAO".
const cartoes = document.querySelectorAll(".cartao");

//DANDO UM ARRAY INICIAL DOS CARTÕES DE 0.
let cartaoAtual = 0;

//CRIANDO FUNÇÃO PARA MOSTRAR CARTÃO.
function monstraCartao (){
  cartoes [cartaoAtual].classList.add("selecionado");
}

//CRIANDO FUNÇÃO PARA ESCONDER O CARTÃO.
function esconderCartaoSelecionado (){
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}


//CÓDIGO BOTÃO AVANÇAR
function btnAvancar () {
  
  if (cartaoAtual === cartoes.length - 1) return;
  esconderCartaoSelecionado();
  cartaoAtual++;
  monstraCartao(cartaoAtual);
};

//CÓDIGO BOTÃO VOLTAR
function btnVoltar () {

  if (cartaoAtual === 0) return;
  esconderCartaoSelecionado();
  cartaoAtual--;
  monstraCartao(cartaoAtual);
};