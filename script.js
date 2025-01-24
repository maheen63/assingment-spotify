function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function searchContent(query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query.trim() === '') {
        return; // If the query is empty, do nothing
    }

    // Dummy data for search results
    const searchResults = [
        { title: 'Song 1', artist: 'Artist 1', image: 'search_song1.jpg' },
        { title: 'Song 2', artist: 'Artist 2', image: 'search_song2.jpg' },
        { title: 'Artist 1', artist: '', image: 'search_artist1.jpg' },
        { title: 'Album 1', artist: 'Artist 3', image: 'search_album1.jpg' }
    ];

    // Filter results based on query
    const filteredResults = searchResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.artist.toLowerCase().includes(query.toLowerCase())
    );

    // Display filtered results
    filteredResults.forEach(result => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${result.image}" alt="${result.title}">
            <div class="card-info">
                <h3>${result.title}</h3>
                <p>${result.artist}</p>
                <button class="like-button">&#9829;</button>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}