const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const content = document.querySelector(".content");
const home= document.querySelectorAll("#home");
const discover= document.querySelectorAll("#discover");
const directory= document.querySelectorAll("#directory");
const join= document.querySelectorAll("#join");
// const navTitle= document.querySelector(".nav-title");
const namemark= document.querySelector("#footer-name");
const level= document.querySelectorAll(".level");
const legend= document.querySelector(".form legend");
const label=document.querySelectorAll(".form label");
const h2= document.querySelector("#membership h2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#fff";
		content.style.color = "#3C0211";
		// navTitle.style.color = "#3C0211";
		home.style.color = "#3C0211";
		discover.style.color = "#3C0211";
		directory.style.color = "#3C0211";
		join.style.color = "#3C0211";
        namemark.style.color = "#3C0211";
		legend.style.color = "#3C0211";
		h2.style.color = "#1F4736";
		h2.style.background = "#fff";

		// Loop through each label element
		label.forEach(label => {
			label.style.color = "#3C0211";
		});
		level.forEach(level => {
			level.style.color = "#3C0211";
		});
		modeButton.innerHTML = "🔆";
	} 
	else {
		body.style.background = "#1F4736";
		// content.style.color = "#1F4736";
		content.style.color = "#FEECED";
		home.style.color = "#FEECED";
		discover.style.color = "#FEECED";
		directory.style.color = "#FEECED";
		join.style.color = "#FEECED";
		// navTitle.style.color = "#FEECED";
        namemark.style.color = "#FEECED";
		legend.style.color = "#fff";
		h2.style.color = "#fff";
		h2.style.background = "#1F4736";
		// Loop through each label element
		label.forEach(label => {
			label.style.color = "#3C0211";
		});
		level.forEach(level => {
			level.style.color="#fff";
		})
		modeButton.innerHTML = "🕶️";
	}
});
