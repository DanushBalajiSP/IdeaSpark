// Function to add click listeners
function setupClickListeners() {
    document.getElementById('c1').onclick = function() {
        window.location.href = 'page1.html'; // Redirect to Page 1
    };
    document.getElementById('c2').onclick = function() {
        window.location.href = 'page2.html'; // Redirect to Page 2
    };
    document.getElementById('c3').onclick = function() {
        window.location.href = 'page3.html'; // Redirect to Page 3
    };
    document.getElementById('c4').onclick = function() {
        window.location.href = 'page4.html'; // Redirect to Page 4
    };
    document.getElementById('c5').onclick = function() {
        window.location.href = 'page5.html'; // Redirect to Page 5
    };
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupClickListeners);

function goto() {
    window.scrollTo(0,760);
}