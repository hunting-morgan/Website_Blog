function fetchCybersecurityNews() {
    const API_KEY = '4b192f81cde447f9bee0353d3b0e20a0';
    const API_URL = `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${API_KEY}`;

    return fetch(API_URL)
        .then(response => response.json())
        .then(data => data.articles);
}

function createPost(article) {
    const post = document.createElement('article');
    const postTitle = document.createElement('h3');
    const postContent = document.createElement('p');

    postTitle.textContent = article.title;
    postContent.textContent = article.description;

    post.appendChild(postTitle);
    post.appendChild(postContent);

    return post;
}

function displayNews() {
    const newsContainer = document.getElementById('newsContainer');

    fetchCybersecurityNews()
        .then(articles => {
            articles.forEach(article => {
                const post = createPost(article);
                newsContainer.appendChild(post);
            });
        })
        .catch(error => {
            console.error('Error fetching cybersecurity news:', error);
        });
}

window.addEventListener('load', displayNews);