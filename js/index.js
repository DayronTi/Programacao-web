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


//CARROSSEL DE NOTÌCIAS
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Paginação de cards
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});