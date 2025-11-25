let cardContainer = document.querySelector(".card-container");
let inputBusca = document.querySelector("#input-busca");

let dados = [];

// 1. Carrega os dados do JSON e renderiza todos os cards uma vez quando a página abre.
async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderCards(dados);
}

// 2. Função chamada pelo botão "Buscar". Filtra os dados já carregados.
function iniciarBusca() {
    let termoBusca = inputBusca.value.toLowerCase();

    let dadosFiltrados = dados.filter(dado => {
        return dado.nome.toLowerCase().includes(termoBusca);
    });

    renderCards(dadosFiltrados);
}

// 3. Renderiza os cards na tela. Agora limpa os antigos antes de criar novos.
function renderCards(dadosParaRenderizar) {
    cardContainer.innerHTML = ""; // Limpa a área de cards

    for(let dado of dadosParaRenderizar){

        let article  = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        <img src="${dado.imagem}" alt="${dado.nome}">
        `;
        cardContainer.appendChild(article);
    }
}

// 4. Chama a função para carregar os dados iniciais.
carregarDados();
