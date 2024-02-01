// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const button = document.getElementById('changeTextButton');

    // Add click event listener to the button
    button.addEventListener('click', function () {
        // Get the h1 element
        const heading = document.querySelector('h1');

        // Change the text content of the h1 element
        heading.textContent = 'Hello World!';
    });
});