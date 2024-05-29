$(document).ready(function() {
    // Toggle menu
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('show');
    });

    // Fetch news articles
    $.ajax({
        url: 'http://127.0.0.1:8000/api/news/',
        method: 'GET',
        dataType: 'json',
        success: function(newsArticles) {
            newsArticles.forEach(function(article) {
                var articleDiv = $('<div>').addClass('news-article');
                var articleTitle = $('<h3>').text(article.title);
                var articleContent = $('<p>').text(article.content);
                var articleLink = $('<a>').attr('href', '#').text('Read More');
                var articleImage = $('<img>').attr({
                    src: article.news_image,
                    alt: article.title
                }).addClass('news-image');

                articleDiv.append(articleTitle, articleImage, articleContent, articleLink);
                $('#news-container').append(articleDiv);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error fetching news:', textStatus, errorThrown);
        }
    });
});