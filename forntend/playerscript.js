 // Fetch player data and populate player list
 $(document).ready(function() {
    const playerListContainer = $('.player-list');

    $.ajax({
        url: 'http://127.0.0.1:8000/api/players/',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, player) {
                const playerCard = $('<div>').addClass('player-card');
                const playerImage = $('<img>').attr({
                    src: player.image,
                    alt: player.name
                });
                const playerName = $('<h3>').addClass('player-name').text(player.name);
                const playerPosition = $('<p>').addClass('player-position').text('Position: ' + player.position);
                const playerAge = $('<p>').addClass('player-age').text('Age: ' + player.age);
                const playerCountry = $('<p>').addClass('player-country').text('Country: ' + player.country);

                playerCard.append(playerImage, playerName, playerPosition, playerAge, playerCountry);
                playerListContainer.append(playerCard);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error fetching player data:', textStatus, errorThrown);
        }
    });
});

// Toggle menu functionality
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('show');
    });
});