document.addEventListener('DOMContentLoaded', () => {
    // 1. Interatividade ao Adicionar ao Carrinho
    const productButtons = document.querySelectorAll('.product-card button');

    productButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Previne o comportamento padrão do botão (se for um link ou formulário)
            event.preventDefault(); 
            
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;

            // Alerta simples para simular a adição ao carrinho
            alert(`"${productName}" foi adicionado ao seu carrinho!`);

            // Você poderia adicionar aqui uma animação ou uma notificação mais elaborada.
        });
    });

    // 2. Funcionalidade da Barra de Pesquisa (Simulação de um evento)
    const searchForm = document.querySelector('.search-and-nav form');
    const searchInput = document.querySelector('.search-and-nav input[type="text"]');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real do formulário
        
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
            console.log(`Buscando por: ${searchTerm}`);
            // Em um site real, esta ação redirecionaria para a página de resultados.
            alert(`Simulando busca por: "${searchTerm}".`);
        } else {
            alert("Por favor, digite algo para pesquisar.");
        }
    });

    // 3. Efeito simples de console para indicar que o JS está funcionando
    console.log("Script.js carregado com sucesso! Interatividade habilitada.");
});