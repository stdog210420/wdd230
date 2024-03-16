const baseURL = "https://stdog210420.github.io/wdd230/";
const linksURL = "https://stdog210420.github.io/wdd230/data/links.json";

const cards = document.querySelector('.card');
const linkList = document.createElement("ul");
async function getLinks() {
    const response = await fetch(linksURL); 
    const data  = await response.json();
    console.log(data);
    displayLinks(data.lessons); 

}   

getLinks();

const linkComponent = ({url, title}) => {
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", url)
    if (url.includes("codepen")) {
        linkElement.href = url;
    } else {
        linkElement.href = baseURL + url;
    }
    linkElement.textContent = title  ;
    return linkElement;
}        
const lessonsComponent = ({lesson, links}) =>{
    const linksClass = links.map(link => linkComponent(link));
    const linkItems = document.createElement("li");  
    linkItems.textContent = `Week ${lesson}: `;
    linksClass.forEach((link, index, array) =>{
        linkItems.appendChild(link);
        if (index != array.length -1){
            const separator = document.createTextNode("|");
            linkItems.appendChild(separator);
        }
    })
    return linkItems;
}
function displayLinks(weeks){
    weeks.forEach( lesson => {
        const lessonElement = lessonsComponent(lesson);
        linkList.appendChild(lessonElement);
    });    
}

cards.appendChild(linkList); 

