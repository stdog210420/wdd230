const linksURL = "https://stdog210420.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector('.card');

async function getMemberData() {
    //Store the response from the fetch() method in a const variable named "response"
    const response = await fetch(url); 
    //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data  = await response.json();
    //Add a console.table() expression method to check the data response at this point in the console window.
    // displayMembers(data.members); // note that we reference the prophets array of the JSON data object, not just the object
    console.table(data.members);// temporary testing of data retreival
}  