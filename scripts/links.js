const baseURL = "https://stdog210420.github.io/wdd230/";
const linksURL = "https://stdog210420.github.io/wdd230/data/links.json";

const cards = document.querySelector('.card');

/* In order to test your work at this point, you will need to write a line of code in links.js which calls the getLinks() function. */
    async function getLinks() {
        //Store the response from the fetch() method in a const variable named "response"
        const response = await fetch(linksURL); 
        //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
        const data  = await response.json();
        //Add a console.table() expression method to check the data response at this point in the console window.
        // displayLinks(data); // note that we reference the prophets array of the JSON data object, not just the object
        console.log(data);// temporary testing of data retreival
    }   

    getLinks();
