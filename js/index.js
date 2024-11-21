//FUNÇOES DA TELA DE CADASTRO
document.addEventListener("DOMContentLoaded", function () {
  const firstnameInput = document.getElementById("firstname");
  const emailInput = document.getElementById("email");
  const btnContinue = document.getElementById("btnContinue");

  // Função para verificar se os campos estão preenchidos
  function checkForm() {
    if (firstnameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
      btnContinue.disabled = false; // Habilita o botão
      // Quando o botão estiver habilitado, adiciona o comportamento de redirecionamento
      btnContinue.addEventListener("click", function () {
        window.location.href = "/Projeto Agru/Programacao-web/index.html"; // Redireciona para a página quando for clicado
      });
    } else {
      btnContinue.disabled = true; // Desabilita o botão se os campos não estiverem preenchidos
    }
  }

  firstnameInput.addEventListener("input", checkForm);
  emailInput.addEventListener("input", checkForm);

  // Chama a função de verificação sempre que carregar a página
  checkForm();
});

window.addEventListener("scroll", function () {
  const footer = document.querySelector("footer");
  const scrollPosition = window.scrollY + window.innerHeight; // Posição do scroll + altura da janela
  const documentHeight = document.documentElement.scrollHeight; // Altura total do documento

  if (scrollPosition >= documentHeight) {
    footer.classList.add("show"); // Mostra o footer quando chegar no final da página
  } else {
    footer.classList.remove("show"); // Esconde o footer caso não esteja no final
  }
});

//Código do menu inicial
let currentIndex = 0; // Índice inicial do carrossel
const itemsVisible = 2; // Número de itens visíveis ao mesmo tempo
const itemsPerMove = 1; // Número de itens a mover de cada vez
const carousel = document.querySelector(".carousel"); // Referência ao carrossel
const totalItems = document.querySelectorAll(
  ".carousel .tags-informativas .box"
).length; // Número total de boxes

// Função para mover os slides
function moveSlide(step) {
  currentIndex += step * itemsPerMove;
  // Se o índice for menor que 0, volta para o final (circular)
  if (currentIndex < 0) {
    currentIndex = Math.ceil(totalItems / itemsVisible) - 1;
  }
  // Se o índice for maior ou igual ao número total de caixas, volta para o início
  if (currentIndex >= Math.ceil(totalItems / itemsVisible)) {
    currentIndex = 0;
  }

  // Calcula o deslocamento com base no número de itens visíveis
  const offset = -(currentIndex * (100 / itemsVisible));
  carousel.style.transform = `translateX(${offset}%)`;
}

//Bloqueio de recursos por nao ter cadastro
document.addEventListener("DOMContentLoaded", function () {
  const linkVejaMais = document.getElementById("linkVejaMais");

  linkVejaMais.addEventListener("click", function (event) {
    event.preventDefault(); // Impede a navegação padrão do link
    alert("Faça o cadastro ou login para acessar esse recurso");
  });
});

//Códgifo do marketplace
const vercategorias = document.querySelector(".ver-categorias");
const mensagem = document.querySelector(".ver-categorias");

// Adiciona o evento de clique
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

const carrossel = document.querySelector(".carrossel");
const prevButton = document.querySelector(".carrossel-prev");
const nextButton = document.querySelector(".carrossel-next");
const items = document.querySelectorAll(".card-oferta");
let inicioProduto = 0;

// Função para atualizar a posição do carrossel
function updateCarrosselPosition() {
  const itemWidth = items[0].offsetWidth + 20; // Largura do item + margem
  carrossel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Função para ir para o próximo item
nextButton.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volta para o primeiro item
  }
  updateCarrosselPosition();
});

// Função para ir para o item anterior
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1; // Vai para o último item
  }
  updateCarrosselPosition();
});

// Inicializar a posição do carrossel
updateCarrosselPosition();
