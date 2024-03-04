const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const content = document.querySelector(".content");
const home= document.querySelector("#home");
const discover= document.querySelector("#discover");
const directory= document.querySelector("#directory");
const join= document.querySelector("#join");
const namemark= document.querySelector("#name");
const level= document.querySelectorAll(".level");
const legend= document.querySelector(".form legend");
const label=document.querySelectorAll(".form label");
const h2= document.querySelector("#membership h2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#fff";
		content.style.color = "#3C0211";
		home.style.color = "#3C0211";
		discover.style.color = "#3C0211";
		directory.style.color = "#3C0211";
        join.style.color = "#3C0211";
        namemark.style.color = "#3C0211";
		// level.style.color = "#3C0211";
		legend.style.color = "#3C0211";
		// label.style.color = "#3C0211";
		h2.style.color = "#1F4736";
		h2.style.background = "#fff";

		// Loop through each level element
		level.forEach(level => {
			level.style.color="#3C0211";
		})

		// Loop through each label element
		label.forEach(label => {
			label.style.color = "#3C0211";
		});

		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#1F4736";
		// content.style.color = "#1F4736";
		content.style.color = "#FEECED";
		home.style.color = "#FEECED";
		discover.style.color = "#FEECED";
		directory.style.color = "#FEECED";
        join.style.color = "#FEECED";
        namemark.style.color = "#FEECED";
		legend.style.color = "#fff";
		h2.style.color = "#fff";
		h2.style.background = "#1F4736";
		level.forEach(level => {
			level.style.color="#fff";
		})

		// Loop through each label element
		label.forEach(label => {
			label.style.color = "#fff";
		});
		modeButton.textContent = "🕶️";
	}
});
