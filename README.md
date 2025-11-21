# 🔥 Análise Térmica — Visualizador Interativo de Técnicas Termoanalíticas

<p align="center">
<img 
    src="inicial.png"
    width="300"
/>
</p>

Este é um projeto de uma página web simples e interativa, criada para funcionar como uma base de consulta rápida sobre diferentes  **métodos de análise térmica**, como TGA, DSC, DTA, DMA, TMA e EGA. 
Os dados são carregados dinamicamente a partir do arquivo `data.json`, e os resultados são exibidos em forma de cartões.  
A aplicação permite que o usuário pesquise por uma técnica específica e veja informações detalhadas sobre ela.
O objetivo é fornecer um recurso rápido e visual para estudantes e profissionais de química, engenharia e materiais.

---

## 🚀 Funcionalidades

- **Busca Dinâmica:** Filtra as técnicas de análise térmica em tempo real conforme o usuário digita no campo de busca.
- **Renderização de Cards:** Exibe as informações de cada técnica (nome, ano de criação, descrição e um link para saber mais) em cards individuais.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, como desktops, tablets e celulares.
- **Fonte de Dados Local:** Todas as informações são carregadas a partir de um arquivo `data.json` local, facilitando a adição ou modificação de dados.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais:

- **HTML5:** Para a estrutura semântica da página.
- **CSS3:** Para a estilização, utilizando variáveis, Flexbox e Media Queries para responsividade.
- **JavaScript (ES6+):** Para a interatividade, manipulação do DOM, consumo de dados com `fetch` e a lógica de busca e renderização.

---

## 📂 Estrutura dos Arquivos

O repositório está organizado da seguinte forma:

```
├── index.html      # Arquivo principal com a estrutura da página
├── style.css       # Folha de estilos para a aparência visual
├── script.js       # Código JavaScript para a funcionalidade de busca
└── data.json       # Arquivo JSON com os dados das técnicas de análise
```

- `index.html`: Contém a estrutura do cabeçalho com o título e a barra de busca, a seção principal onde os cards são exibidos e o rodapé com links externos.
- `style.css`: Define toda a aparência da aplicação, incluindo o tema escuro, a tipografia (usando a fonte Quicksand do Google Fonts), o layout dos cards e a responsividade para dispositivos móveis.
- `script.js`: Responsável pela lógica da aplicação. Ele contém:
  - Uma função `iniciarBusca()` que é acionada pelo botão "Buscar". Ela lê o termo pesquisado, carrega os dados do `data.json` usando `fetch` de forma assíncrona, filtra os resultados e chama a função de renderização.
  - Uma função `renderizarCards()` que limpa a tela e cria dinamicamente os cards com as informações filtradas, adicionando-os à página.
- `data.json`: Um arquivo que serve como um pequeno "banco de dados", armazenando um array de objetos, onde cada objeto representa uma técnica de análise com seu nome, descrição, ano e um link de referência.

---

## 💻 Como Executar

Como este é um projeto front-end puro, você não precisa de um servidor complexo.

1.  Clone ou baixe este repositório para sua máquina local.
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência (como Google Chrome, Firefox, etc.).

---

## 👨‍💻 Autoria

Feito por [Raiane de Sá](https://github.com/Raiane-S) - Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/raiane-s/)!


