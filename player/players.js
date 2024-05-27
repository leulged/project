// script.js
document.addEventListener('DOMContentLoaded', () => {
    const playerCards = document.querySelectorAll('.player-card');
    
    playerCards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
