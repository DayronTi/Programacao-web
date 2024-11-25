// script.js

// Exemplo de dados dos produtos no carrinho
const cartItems = [
    { id: 1, name: "Produto A", price: 99.99, quantity: 2 },
    { id: 2, name: "Produto B", price: 49.99, quantity: 1 },
    { id: 3, name: "Produto C", price: 199.99, quantity: 1 },
];

// Função para renderizar os itens no carrinho
function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ''; // Limpa a lista antes de renderizar novamente

    cartItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <p>${item.name}</p>
            <p>R$ ${item.price.toFixed(2)}</p>
            <p>Quantidade: ${item.quantity}</p>
            <p>Total: R$ ${(item.price * item.quantity).toFixed(2)}</p>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });

    // Atualizar o resumo do carrinho
    updateCartSummary();
}

// Função para calcular e atualizar o resumo do carrinho (total, frete, preço final)
function updateCartSummary() {
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingPrice = totalPrice > 200 ? 0 : 20; // Frete grátis para compras acima de R$ 200
    const finalPrice = totalPrice + shippingPrice;

    // Atualiza os valores no HTML
    document.getElementById("total-price").textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    document.getElementById("shipping-price").textContent = `Frete: R$ ${shippingPrice.toFixed(2)}`;
    document.getElementById("final-price").textContent = `Preço Final: R$ ${finalPrice.toFixed(2)}`;
}

// Função de inicialização para renderizar a página
function initializeCart() {
    renderCartItems();
    
    // Adiciona o evento de clique no botão "Finalizar Compra"
    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener('click', function() {
        alert("Impossível finalizar compra, por favor faça seu cadastro.");
    });
}

// Chama a função para inicializar o carrinho ao carregar a página
window.onload = initializeCart;
