document.addEventListener('DOMContentLoaded', function() {
    const playerListContainer = document.querySelector('.player-list');

    fetch('http://127.0.0.1:8000/api/players/')
        .then(response => response.json())
        .then(data => {
            data.forEach(player => {
                const playerCard = document.createElement('div');
                playerCard.classList.add('player-card');

                const playerImage = document.createElement('img');
                playerImage.src = player.image;
                playerImage.alt = player.name;

                const playerName = document.createElement('h3');
                playerName.classList.add('player-name');
                playerName.textContent = player.name;

                const playerPosition = document.createElement('p');
                playerPosition.classList.add('player-position');
                playerPosition.textContent = `Position: ${player.position}`;

                const playerAge = document.createElement('p');
                playerAge.classList.add('player-age');
                playerAge.textContent = `Age: ${player.age}`;

                const playerCountry = document.createElement('p');
                playerCountry.classList.add('player-country');
                playerCountry.textContent = `Country: ${player.country}`;

                playerCard.appendChild(playerImage);
                playerCard.appendChild(playerName);
                playerCard.appendChild(playerPosition);
                playerCard.appendChild(playerAge);
                playerCard.appendChild(playerCountry);

                playerListContainer.appendChild(playerCard);
            });
        })
        .catch(error => {
            console.error('Error fetching player data:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});
