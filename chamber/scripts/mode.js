const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const content = document.querySelector(".content");
const main = document.querySelector("main");
const ulElement = document.querySelector("ul");
const liElement = document.querySelector("li");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#fff";
		content.style.color = "#3C0211";
		ulElement.style.color = "#3C0211";
		liElement.style.color = "#3C0211";

		// main.style.background = "#fff";
		// main.style.color = "#3C0211";
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#1F4736";
		content.style.color = "#FEECED";
		ulElement.style.color = "#FEECED";
		liElement.style.color = "#FEECED";

		// main.style.background = "#1F4736";
		// main.style.color = "#FEECED";
		modeButton.textContent = "🕶️";
	}
});
