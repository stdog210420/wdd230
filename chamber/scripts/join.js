// Get the hidden input field by its id
const timestampField = document.getElementById('timestamp');

// Get the current date/time in milliseconds
const currentTimestamp = Date.now();

// Set the value of the hidden input field to the current date/time
timestampField.value = currentTimestamp;