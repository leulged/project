document.addEventListener('DOMContentLoaded', function () {
    const fixtureContainer = document.getElementById('fixture-container');

    // Fetch fixture data from the API
    fetch('http://127.0.0.1:8000/api/fixture/')
        .then(response => response.json())
        .then(fixtures => {
            // Loop through each fixture and create HTML elements
            fixtures.forEach(fixture => {
                const fixtureCard = document.createElement('div');
                fixtureCard.classList.add('fixture-card');

                const homeTeamImage = document.createElement('img');
                homeTeamImage.src = fixture.home_image;
                homeTeamImage.alt = fixture.home_team;

                const awayTeamImage = document.createElement('img');
                awayTeamImage.src = fixture.away_image;
                awayTeamImage.alt = fixture.away_team;

                const fixtureTitle = document.createElement('h3');
                fixtureTitle.textContent = `${fixture.home_team} vs ${fixture.away_team}`;

                const fixtureVenue = document.createElement('p');
                fixtureVenue.textContent = `Venue: ${fixture.venue}`;

                const fixtureCompetition = document.createElement('p');
                fixtureCompetition.textContent = `Competition: ${fixture.competition}`;

                const fixtureDateTime = document.createElement('p');
                const fixtureDate = new Date(fixture.date_time);
                fixtureDateTime.textContent = `Date: ${fixtureDate.toLocaleDateString()} Time: ${fixtureDate.toLocaleTimeString()}`;

                fixtureCard.appendChild(homeTeamImage);
                fixtureCard.appendChild(awayTeamImage);
                fixtureCard.appendChild(fixtureTitle);
                fixtureCard.appendChild(fixtureVenue);
                fixtureCard.appendChild(fixtureCompetition);
                fixtureCard.appendChild(fixtureDateTime);

                fixtureContainer.appendChild(fixtureCard);
            });
        })
        .catch(error => {
            console.error('Error fetching fixtures:', error);
        });
});
