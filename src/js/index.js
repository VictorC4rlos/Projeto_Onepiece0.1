

const botoes = document.querySelectorAll(".botao")
console.log(botoes);

const personagens = document.querySelectorAll(".personagem");




botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselacionarBotao();
        selecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado")
    });
})




function selecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselacionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}


