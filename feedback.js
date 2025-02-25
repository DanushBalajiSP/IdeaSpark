// JavaScript to hide inputs and show thank you message
const submitButton = document.getElementById("submitBtn");
const inputs = document.querySelectorAll(".container input");
const thankMessage = document.getElementById("thankMessage");

function submit() {
    // Hide the input fields
    inputs.forEach(input => input.style.display = "none");

    // Hide the button
    submitButton.style.display = "none";

    // Show thank you message
    thankMessage.style.display = "block";
};