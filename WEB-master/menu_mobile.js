document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuMobile = document.getElementById('menuMobile');

    if (menuToggle && menuMobile) {
        menuToggle.addEventListener('click', (event) => {
            menuMobile.classList.toggle('active');
            event.stopPropagation(); // Impede que o clique no botão feche imediatamente o menu
        });

        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            if (!menuMobile.contains(event.target) && !menuToggle.contains(event.target)) {
                menuMobile.classList.remove('active');
            }
        });
    }
});
