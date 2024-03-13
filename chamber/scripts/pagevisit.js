// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector("#visit-count");
// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) ;

// Get the current date
// const currentDate = new Date().toDateString();
const currentDate = new Date(2024, 2, 16);
// Get the last visit date from localStorage
const lastVisitDate = localStorage.getItem('lastVisitDate');

// Calculate the difference between the current date and the last visit date
const differenceInTime = new Date(currentDate) - new Date(lastVisitDate);
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day = 84600000
const differenceInDays = Math.floor(differenceInTime / 84600000);
console.log(currentDate );
console.log(lastVisitDate );
console.log(differenceInTime );
console.log(differenceInDays );


// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
	if (differenceInDays == 0){
		visitsDisplay.textContent = `Back so soon! Awesome!`;
	}
	else if (differenceInDays == 1){
		visitsDisplay.textContent = `You last visited one day ago.`;
	}
	else{
		visitsDisplay.textContent = `You last visited ${differenceInDays} days ago.`;
	}
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisitDate", currentDate);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
