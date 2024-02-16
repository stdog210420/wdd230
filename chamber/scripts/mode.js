const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const content = document.querySelector(".content");
const home= document.querySelector("#home");
const discover= document.querySelector("#discover");
const directory= document.querySelector("#directory");
const join= document.querySelector("#join");
const namemark= document.querySelector("#name");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#E7EFE7";
		content.style.color = "#3C0211";
		home.style.color = "#3C0211";
		discover.style.color = "#3C0211";
		directory.style.color = "#3C0211";
        join.style.color = "#3C0211";
        namemark.style.color = "#3C0211";
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#1F4736";
		content.style.color = "#FEECED";
		home.style.color = "#FEECED";
		discover.style.color = "#FEECED";
		directory.style.color = "#FEECED";
        join.style.color = "#FEECED";
        namemark.style.color = "#FEECED";
		modeButton.textContent = "🕶️";
	}
});
