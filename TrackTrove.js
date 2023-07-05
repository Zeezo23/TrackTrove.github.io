const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const words = ['Heartless - Kanye West', 'Man Of The Year - ScHoolboy Q', 'Party Monster - The Weeknd', 'Unforgettable - French Montana ft. Swae Lee', 'N95 - Kendrick Lamar'];

searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    const matchingWords = words.filter(word => word.toLowerCase().includes(searchValue));

    // Clear previous results
    searchResults.innerHTML = '';

    // Populate dropdown with matching words
    matchingWords.forEach(word => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `${word}.html`;
        link.textContent = word;
        li.appendChild(link);
        searchResults.appendChild(li);
    });

    // Show/hide dropdown
    if (searchValue.length > 0 && matchingWords.length > 0) {
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
});

// Update input value when a dropdown option is clicked
searchResults.addEventListener('click', function(event) {
    if (event.target.nodeName === 'A') {
        event.preventDefault();
        const selectedWord = event.target.textContent;
        searchInput.value = selectedWord;
        searchResults.style.display = 'none';
        const link = event.target.getAttribute('href');
        window.location.href = link;
    }
});