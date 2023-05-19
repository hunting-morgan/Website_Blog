// Fetch cybersecurity news from the News API
function fetchCybersecurityNews() {
    const API_KEY = '4b192f81cde447f9bee0353d3b0e20a0';
    const API_URL = https://newsapi.org/v2/everything?q=cybersecurity&apiKey=4b192f81cde447f9bee0353d3b0e20a0;

    return fetch(API_URL)
        .then(response => response.json())
        .then(data => data.articles);
}

// Create a new post element
function createPost(title, content) {
    const article = document.createElement('article');
    const postTitle = document.createElement('h3');
    const postContent = document.createElement('p');

    postTitle.textContent = title;
    postContent.textContent = content;

    article.appendChild(postTitle);
    article.appendChild(postContent);

    return article;
}

// Display cybersecurity news on the page
function displayNews() {
    const newsContainer = document.getElementById('newsContainer');

    fetchCybersecurityNews()
        .then(articles => {
            articles.forEach(article => {
                const post = createPost(article.title, article.description);
                newsContainer.appendChild(post);
            });
        })
        .catch(error => {
            console.error('Error fetching cybersecurity news:', error);
        });
}

// Call the displayNews function when the page loads
window.addEventListener('load', displayNews);