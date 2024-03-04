// Get the hidden input field by its id
const timestampField = document.getElementById('timestamp');
// Get the current date/time in milliseconds
const currentTimestamp = Date.now();

// Set the value of the hidden input field to the current date/time
timestampField.value = currentTimestamp;

const position = document.getElementById('position');
// Add an event listener to listen for input events
position.addEventListener('input', function() {
    // Get the field value
    const position_value = position.value.trim();

    // Define a regular expression pattern
    const position_pattern = /^[A-Za-z -]{7,}$/;

    // Check if the value matches the pattern
    if (position_pattern.test(position_value)) {
        // If the value matches the pattern, it's valid
        console.log('Valid input');
    } else {
        // If the value doesn't match the pattern, it's invalid
        console.log('Invalid input');
		position.value = "";
		position.focus();
    }
});