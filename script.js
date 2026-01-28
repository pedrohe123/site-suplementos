const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho 🛒 (simulação)");
    });
});
