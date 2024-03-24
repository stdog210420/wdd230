const url = "https://stdog210420.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector('.cards');

async function getMemberData() {
    //Store the response from the fetch() method in a const variable named "response"
    const response = await fetch(url); 
    //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data  = await response.json();
    //Add a console.table() expression method to check the data response at this point in the console window.
    displayMembers(data.companies); // note that we reference the prophets array of the JSON data object, not just the object
    console.table(data.companies);// temporary testing of data retreival
}  

getMemberData();

const displayMembers = (members) => {
    // card build code goes here
        members.forEach((member)=> {
        //create a section element and store it in a variable named card using createElement(),
        let card= document.createElement("section");  
        //create an h2 element and store it in a variable named "companyName",
        let companyName = document.createElement("h2");
        let address = document.createElement("p");  
        let phone = document.createElement("p");  
        let website = document.createElement("a");
        let logo = document.createElement("img"); 
        let membership = document.createElement("p");  
        let information = document.createElement("p");  
        companyName.textContent = `${member.name}`; 
        companyName.setAttribute('id','company')
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.href= member.website;
        website.textContent= member.website;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`); // fill in the blank
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '252');
        membership.textContent = `${member.membership_level}`;
        membership.setAttribute('id','member')
        information.textContent = `${member.other_information}`;
        card.appendChild(logo); //fill in the blank
        card.appendChild(companyName); //fill in the blank
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(information);
        cards.appendChild(card);
        });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


