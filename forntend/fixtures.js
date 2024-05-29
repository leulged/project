 // Wait for DOM to be ready
 $(document).ready(function() {
    const fixtureContainer = $('#fixture-container');

    // Fetch fixture data from the API
    $.ajax({
        url: 'http://127.0.0.1:8000/api/fixture/',
        method: 'GET',
        dataType: 'json',
        success: function(fixtures) {
            // Loop through each fixture and create HTML elements
            $.each(fixtures, function(index, fixture) {
                const fixtureCard = $('<div>').addClass('fixture-card');
                const homeTeamImage = $('<img>').attr({
                    src: fixture.home_image,
                    alt: fixture.home_team
                });
                const awayTeamImage = $('<img>').attr({
                    src: fixture.away_image,
                    alt: fixture.away_team
                });
                const fixtureTitle = $('<h3>').text(`${fixture.home_team} vs ${fixture.away_team}`);
                const fixtureVenue = $('<p>').text(`Venue: ${fixture.venue}`);
                const fixtureCompetition = $('<p>').text(`Competition: ${fixture.competition}`);
                const fixtureDateTime = $('<p>').text(`Date: ${new Date(fixture.date_time).toLocaleString()}`);

                fixtureCard.append(homeTeamImage, awayTeamImage, fixtureTitle, fixtureVenue, fixtureCompetition, fixtureDateTime);
                fixtureContainer.append(fixtureCard);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error fetching fixtures:', textStatus, errorThrown);
        }
    });
});