document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('news-container');

    fetch('http://127.0.0.1:8000/api/news/')
        .then(response => response.json())
        .then(newsArticles => {
            newsArticles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('news-article');

                const articleTitle = document.createElement('h3');
                articleTitle.textContent = article.title;

                const articleContent = document.createElement('p');
                articleContent.textContent = article.content;

                const articleLink = document.createElement('a');
                articleLink.href = '#';
                articleLink.textContent = 'Read More';

                const articleImage = document.createElement('img');
                articleImage.src = article.news_image;
                articleImage.alt = article.title;
                articleImage.classList.add('news-image');

                articleDiv.appendChild(articleTitle);
                articleDiv.appendChild(articleImage);
                articleDiv.appendChild(articleContent);
                articleDiv.appendChild(articleLink);

                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});
