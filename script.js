let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    // Pega o valor digitado no campo de busca e converte para minúsculas
    const termoBusca = document.getElementById("searchInput").value.toLowerCase();

    let resposta = await fetch ("data.json")
    dados = await resposta.json();

    // Filtra os dados com base no termo pesquisado no nome da técnica
    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca)
    );

    renderizarCards(dadosFiltrados);
}
function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `      
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }  

}