// Fetch cybersecurity news from an API or RSS feed
function fetchCybersecurityNews() {
    // Replace the API_URL with the actual API endpoint or RSS feed URL
    return fetch(https://www.cshub.com/rss-feeds)
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
                const post = createPost(article.title, article.content);
                newsContainer.appendChild(post);
            });
        })
        .catch(error => {
            console.error('Error fetching cybersecurity news:', error);
        });
}

// Call the displayNews function when the page loads
window.addEventListener('load', displayNews);