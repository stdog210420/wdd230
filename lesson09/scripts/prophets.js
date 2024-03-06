const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

/* Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.*/

    //Create another function expression called getProphetData. Make it an async anonymous, arrow function.
    async function getProphetData() {
        //Store the response from the fetch() method in a const variable named "response"
        const response = await fetch(url); 
        //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
        const data  = await response.json();
        //Add a console.table() expression method to check the data response at this point in the console window.
        displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
        console.table(data.prophets);// temporary testing of data retreival
    }   

    getProphetData();

    const displayProphets = (prophets) => {
        // card build code goes here
            prophets.forEach((prophet)=> {
            //create a section element and store it in a variable named card using createElement(),
            let card= document.createElement("section");  
            //create an h2 element and store it in a variable named "fullName",
            let fullName = document.createElement("h2"); 
            //create an img element and store it in a variable named "portrait", 
            let portrait = document.createElement("img");  
    
            // Build the h2 content out to show the prophet's full name
            fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
            // Build the image portrait by setting all the relevant attributes  
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');        
            // Append the section(card) with the created elements
            card.appendChild(fullName); //fill in the blank
            card.appendChild(portrait);
            cards.appendChild(card);
         }); // end of arrow function and forEach loop        
    
        }