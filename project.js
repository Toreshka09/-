document.addEventListener( 'DOMContentLoaded', () => {
    const button = document.getElementById('actionBtn');
    const cards = document.querySelectorAll('.card');

    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => button.style.transform = 'scale(1)' , 100);

        cards.forEach(card => {
            const randomColor = `hsl(${Math.random() * 360}, 70%, 95%)`;
            card.style.backgroundColor = randomColor;
            card.style.transition = '0.5s ease';
        });

        console.log('Стиль обновлен!')
    });
});