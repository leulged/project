 // Fetch player data and populate player list
 $(document).ready(function() {
    const playerListContainer = $('.player-list');

    $.ajax({
        url: 'http://127.0.0.1:8000/api/players/',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, player) {
                if (player.position === 'Goalkeeper'){
                const playerCard = $('<div>').addClass('player-card');
                const playerImage = $('<img>').attr({
                    src: player.image,
                    alt: player.name
                });
                const playerPostion = $('<h3>').addClass('player-postion').text(player.position).css('color','black');
                const playerName = $('<h3>').addClass('player-name').text(player.name);
                const playerPosition = $('<p>').addClass('player-position').text('Position: ' + player.position);
                const playerAge = $('<p>').addClass('player-age').text('Age: ' + player.age);
                const playerCountry = $('<p>').addClass('player-country').text('Country: ' + player.country);

                playerCard.append(playerPosition,playerImage, playerName, playerPosition, playerAge, playerCountry);
                playerListContainer.append(playerCard);
            }

            if (player.position === 'Defender'){
                const playerCard = $('<div>').addClass('player-card');
                const playerImage = $('<img>').attr({
                    src: player.image,
                    alt: player.name
                });
                const playerPostion = $('<h3>').addClass('player-postion').text(player.position).css('color','black');
                const playerName = $('<h3>').addClass('player-name').text(player.name);
                const playerPosition = $('<p>').addClass('player-position').text('Position: ' + player.position);
                const playerAge = $('<p>').addClass('player-age').text('Age: ' + player.age);
                const playerCountry = $('<p>').addClass('player-country').text('Country: ' + player.country);

                playerCard.append(playerPosition,playerImage, playerName, playerPosition, playerAge, playerCountry);
                playerListContainer.append(playerCard);
            }

            if (player.position === 'midefielder'){
                const playerCard = $('<div>').addClass('player-card');
                const playerImage = $('<img>').attr({
                    src: player.image,
                    alt: player.name
                });
                const playerPostion = $('<h3>').addClass('player-postion').text(player.position).css('color','black');
                const playerName = $('<h3>').addClass('player-name').text(player.name);
                const playerPosition = $('<p>').addClass('player-position').text('Position: ' + player.position);
                const playerAge = $('<p>').addClass('player-age').text('Age: ' + player.age);
                const playerCountry = $('<p>').addClass('player-country').text('Country: ' + player.country);

                playerCard.append(playerPosition,playerImage, playerName, playerPosition, playerAge, playerCountry);
                playerListContainer.append(playerCard);
            }

            if (player.position === 'FORWARDS'){
                const playerCard = $('<div>').addClass('player-card');
                const playerImage = $('<img>').attr({
                    src: player.image,
                    alt: player.name
                });
                const playerPostion = $('<h3>').addClass('player-postion').text(player.position).css('color','black');
                const playerName = $('<h3>').addClass('player-name').text(player.name);
                const playerPosition = $('<p>').addClass('player-position').text('Position: ' + player.position);
                const playerAge = $('<p>').addClass('player-age').text('Age: ' + player.age);
                const playerCountry = $('<p>').addClass('player-country').text('Country: ' + player.country);

                playerCard.append(playerPosition,playerImage, playerName, playerPosition, playerAge, playerCountry);
                playerListContainer.append(playerCard);
            }
        
        });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error fetching player data:', textStatus, errorThrown);
        }
    });
});


$(document).ready(function() {
    const PlayerList = $('squad');
    $.ajax({
        url: 'http://127.0.0.1:8000/api/players/',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
    }});
})
$(document).ready(function() {
    const PlayerList = $('.squad'); 

    $.ajax({
        url: 'http://127.0.0.1:8000/api/players/',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            data.forEach(function(player) {
                const playerCard = $('<div>').addClass('player-name'); // Corrected element creation
                const playerName = $('<p>').text(player.name);
                const playerPosition = $('<p>').text(player.position) // Corrected element creation

                playerCard.append(playerPosition)
                playerCard.append(playerName);
                PlayerList.append(playerCard);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error fetching players:', textStatus, errorThrown);
        }
    });
});
