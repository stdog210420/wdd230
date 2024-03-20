const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const eMail = document.querySelector("#email");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
const message3 = document.querySelector("#message3");
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
		message2.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

eMail.addEventListener("input", function(){
	const eMail_value = eMail.value.trim();//trim() 方法用于删除字符串的开头和结尾处的空格
	const eMail_pattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
	if (eMail_pattern.test(eMail_value)){
		eMail.style.backgroundColor = "#fff";
		eMail.style.color = "#000";
		message3.style.display = "none";
	}
	else{
		message3.textContent = "❗Please enter yout BYUI email address.";
		message3.style.visibility = "show";
		eMail.style.backgroundColor = "#fff0f3";
		eMail_value= "";
		eMail.focus();
	}
	return eMail_value;
});



const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range-rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
