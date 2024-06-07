document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input[type="text"]');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        console.log('Search query:', query);
        // Implement search functionality here
    });
});
