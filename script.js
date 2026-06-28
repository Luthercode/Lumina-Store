document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.card .btn--primary');
    const contador = document.querySelector('.header__cart-count');
    let total = 0;

    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            total++;
            contador.textContent = total;

            const textoOriginal = botao.textContent;
            botao.textContent = 'Adicionado ✓';
            botao.disabled = true;

            setTimeout(() => {
                botao.textContent = textoOriginal;
                botao.disabled = false;
            }, 1200);
        });
    });
});
