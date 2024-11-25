//Códigos do marketplace
//PESQUISA






//Carrossel de banners
const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");
let slideAtual = 0; // Valor Atual do slide

function esconderSlide() {
  // Função para percorrer todo o slider e remover a classe 'on'
  slider.forEach((item) => item.classList.remove("on"));
}

function mostrarSlide() {
  // Função usada para mostrar o slide atual (que estiver com o índice 0 é adicionado a classe 'on')
  slider[slideAtual].classList.add("on");
}

function proximoSlider() {
  esconderSlide();
  if (slideAtual === slider.length - 1) {
    slideAtual = 0; // Volta ao primeiro slide
  } else {
    slideAtual++;
  }
  mostrarSlide();
}

function voltarSlider() {
  esconderSlide();
  if (slideAtual === 0) {
    slideAtual = slider.length - 1; // Vai para o último slide
  } else {
    slideAtual--;
  }
  mostrarSlide();
}

// Adiciona o evento de clique para o botão "Próximo"
btnNext.addEventListener("click", proximoSlider);
// Adiciona o evento de clique para o botão "Anterior"
btnPrev.addEventListener("click", voltarSlider);
// Função para mover o slider automaticamente
function moverSliderAutomaticamente() {
  setInterval(() => {
    proximoSlider(); // Chama a função que move para o próximo slide
  }, 3000); // Define o intervalo para 3000ms (3 segundos)
}
// Chama a função para iniciar o movimento automático
moverSliderAutomaticamente();


//CARROSSEL DE PRODUTOS
let produtoInicial = 0; // Índice inicial do carrossel
const itemVisivel = 4; // Número de itens visíveis ao mesmo tempo
const itenMovidos = 1; // Número de itens a mover de cada vez
const carrosselProdutosDestaque = document.querySelector(
  ".carrossel-produtos-destaque"
); // Referência ao carrossel de destaques
const carrosselProdutosOfertas = document.querySelector(
  ".carrossel-melhores-ofertas"
); // Referência ao carrossel de ofertas
const totalItems = document.querySelectorAll(
  ".carousel-container .tags-informativas .box"
).length; // Número total de boxes
// Função para mover os slides
function moveSlideDestaqueProduto(step) {
  produtoInicial += step * itenMovidos;
  // Se o índice for menor que 0, volta para o final (circular)
  if (produtoInicial < 0) {
    produtoInicial = Math.ceil(totalItems / itemVisivel) - 1;
  }
  // Se o índice for maior ou igual ao número total de caixas, volta para o início
  if (produtoInicial >= Math.ceil(totalItems / itemVisivel)) {
    produtoInicial = 0;
  }
  // Calcula o deslocamento com base no número de itens visíveis
  const offset = -(produtoInicial * (100 / itemVisivel));
  carrosselProdutosDestaque.style.transform = `translateX(${offset}%)`;
}

function moveSlideMelhoresOfertas(step) {
  produtoInicial += step * itenMovidos;
  // Se o índice for menor que 0, volta para o final (circular)
  if (produtoInicial < 0) {
    produtoInicial = Math.ceil(totalItems / itemVisivel) - 1;
  }
  // Se o índice for maior ou igual ao número total de caixas, volta para o início
  if (produtoInicial >= Math.ceil(totalItems / itemVisivel)) {
    produtoInicial = 0;
  }

  // Calcula o deslocamento com base no número de itens visíveis
  const offset = -(produtoInicial * (100 / itemVisivel));
  carrosselProdutosOfertas.style.transform = `translateX(${offset}%)`;
}

//FUNÇÃO PARA VERIFICAR TAMANHO DE TELA
function checkScreenSizeAndMoveSlide() {
  if (window.innerWidth >= 440) {
    moveSlideMelhoresOfertas(-5); // Chama a função com o parâmetro desejado
  }
}

// Adiciona o ouvinte de evento para o redimensionamento da tela
window.addEventListener('resize', checkScreenSizeAndMoveSlide);

// Chama a função também no carregamento da página para verificar o tamanho inicial
checkScreenSizeAndMoveSlide();


//MOVIMENTO DE APROXIMAÇÃO
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show-section');
    } else {
      entry.target.classList.remove('show-section');
    }
  });
});

const elementos = document.querySelectorAll('.hidden-section');
elementos.forEach((elemento) => myObserver.observe(elemento));








// MENU MOBILE
const vercategorias = document.querySelector(".ver-categorias");
const mensagem = document.querySelector(".ver-categorias");

vercategorias.addEventListener("click", () => {
  // Verifica se o layout está no modo responsivo (por exemplo, max-width: 768px)
  if (window.innerWidth <= 768) {
    // Seleciona a lista de categorias
    const categorias = document.querySelector(".nav-lista");

    // Obtém o estilo calculado da lista de categorias
    const estilo = window.getComputedStyle(categorias);

    // Alterna a visibilidade da lista
    if (estilo.display === "block" || estilo.display === "flex") {
      // Se as categorias estão visíveis, esconda-as e coloque "Ver categorias"
      categorias.style.display = "none";
      mensagem.innerHTML =
        'Ver categorias <i class="fa-solid fa-angle-down"></i>';
    } else {
      // Caso contrário, exiba as categorias e mostre "Esconder categorias"
      categorias.style.display = "block"; // ou 'flex', dependendo do seu layout
      mensagem.innerHTML =
        'Esconder categorias <i class="fa-solid fa-angle-up"></i>';
    }
  }
});






let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = `Carrinho: ${cartCount} item(s)`;
}