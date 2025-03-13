// Function to search for a project on Google
function searchProject(query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' projects list')}`;
    window.location.href = searchUrl;
}

// Call the function to perform the search
