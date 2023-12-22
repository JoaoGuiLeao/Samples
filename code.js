//Total de Amostras
const numero = document.querySelectorAll(".amostras");
const total = document.getElementById("total");
total.innerHTML = "Total de Amostras : " + numero.length;

//Nome do Usuario (POR ENQUANTO)
const nomeUsuario = document.getElementById("olaNome");
let nomeado = "nao";
const botaoNomeador = document.getElementById("botaoNome");
function nome() {
  if (nomeado === "nao") {
    const nomear = document.getElementById("nomear").value;
    nomeUsuario.innerHTML = "Olá, " + nomear;
    botaoNomeador.style.backgroundColor = "darkred";
    botaoNomeador.innerHTML = "Bloqueado";
    botaoNomeador.style.paddingRight = "105px";
    botaoNomeador.style.color = "white";
    botaoNomeador.style.border = "solid red";
    nomeado = "sim";
  }
}

//Funcionamento Não Disponivel (POR ENQUANTO)
const funcionamento = document.getElementById("funcionamento");
let toques = 0;
function ButtonConfra() {
  if (toques <= 2) {
    funcionamento.innerHTML = "Não Funciona Por Enquanto!!!";
    toques = toques + 1;
  } else {
    funcionamento.innerHTML = "Já Disse Que Não Funciona!!!";
  }
}

//Fechar Funcionamento (POR ENQUANTO)
function fechar() {
  funcionamento.innerHTML = "";
}
