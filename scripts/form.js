const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
kp1.addEventListener("input", function(){
	const kp1_value = kp1.value.trim();
	const kp1_pattern = /^[a-zA-Z0-9]{8,}$/;
	if (kp1_pattern.test(kp1_value)){
        // If the value matches the pattern, it's valid
		// console.log("Input is valid.");
		kp1.style.backgroundColor = "#fff";
		kp1.style.color = "#000";
		message1.style.display = "none";
	}
	else{
		// console.log("Input is invalid.");
		message1.textContent = "❗Please revise to conform with the format.";
		message1.style.visibility = "show";
		kp1.style.backgroundColor = "#fff0f3";
		kp1_value = "";
		kp1.focus();
	}
});


kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message2.textContent = "❗Key Phrases DO NOT MATCH!";
		message2.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range-rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
