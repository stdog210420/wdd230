const modeButton = document.querySelector("#mode");
const dark = document.querySelector(".dark");



modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🏝️")) {
		dark.style.background = "#000";
		dark.style.color = "#fff";

		modeButton.textContent = "⛺";
	} else {
		dark.style.background = "#fff";
		dark.style.color = "#192A51";

		modeButton.textContent = "🏝️";
	}
});


