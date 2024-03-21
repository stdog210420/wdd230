const modeButton = document.querySelector("#mode");
const dark = document.querySelector(".dark");



modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		dark.style.background = "#fff";
		dark.style.color = "#3C0211";

		// modeButton.classList.toggle("dark");
		modeButton.textContent = "🔆";
	} else {
		dark.style.background = "#1F4736";
		dark.style.color = "#FEECED";

		modeButton.textContent = "🕶️";
	}
});


