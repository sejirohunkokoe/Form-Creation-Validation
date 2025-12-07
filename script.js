// 1. Setup and Initial Code Structure
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission and Event Prevention
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // 3. Input Retrieval and Trimming
        // Retrieve and trim values from input fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 4. Validation Logic
        // Initialize Validation Variables
        let isValid = true;
        let messages = [];

        // Username Validation: Check if length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: Check if it includes both '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must include both '@' and '.' characters.");
        }

        // Password Validation: Ensure length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 5. Displaying Feedback
        // Make feedbackDiv visible
        feedbackDiv.style.display = "block";

        if (isValid) {
            // Success State
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green success color
        } else {
            // Error State
            // Join messages with <br> to form a single string
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red error color
        }
    });
});