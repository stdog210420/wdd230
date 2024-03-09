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
        displayLinks(data); // note that we reference the prophets array of the JSON data object, not just the object
        console.log(data);// temporary testing of data retreival
    }   

    getLinks();
//Create the displayLinks() function and name the function's single parameter weeks. 
//Remember from the json data that you wrote and tested that the data is an array of objects representing weeks of the term.
function displayLinks(weeks){
    // card build code goes here
    weeks.lessons.forEach((lesson)=> {
        //create a section element and store it in a variable named card using createElement(),
        // let listItem = document.createElement("section"); 

        let linkList = document.createElement("ul");
        let linkItem = document.createElement("li");  
        linkItem.textContent = `Week ${lesson.lesson}: `;    
        // 增加連結
        lesson.links.forEach(link => {
            let linkElement = document.createElement("a");
            if (link.url.includes("codepen")) {
                linkElement.href = link.url;
            } else {
                linkElement.href = baseURL + link.url;
            }
            linkElement.textContent = link.title;
            linkItem.appendChild(linkElement);
            linkList.appendChild(linkItem);
        });

        linkList.appendChild(linkItem);
        cards.appendChild(linkList); 
        // cards.appendChild(listItem); 
        }
    );    
}

    // let listItem = document.createElement("li");  
    // let linkurl = document.createElement("a");
    // let weekNumber = document.createElement("p");
    // let weekContent = document.createElement("p");
    // linkurl.setAttribute("href", url);
    // let spanTag = document.createElement("span");
    // spanTag.setAttribute("class", "divider");
    // spanTag.textContent = "|";
    // weekNumber.textContent = `Week ${week.lesson}`;
    // linkurl.innerHTML =  `${week.links.url}`;
    // weekContent.textContent = `Week ${week.links.title}`;   
    // listItem.appendChild(linkurl);
    // listItem.appendChild(weekNumber); 
    // listItem.appendChild(weekContent);  
    // listItem.appendChild(spanTag); 
    // cards.appendChild(listItem); 