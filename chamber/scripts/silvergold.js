const urlweb = "https://stdog210420.github.io/wdd230/chamber/data/members.json";

async function getSilverGoldData() {
    //Store the response from the fetch() method in a const variable named "response"
    const response = await fetch(urlweb); 
    //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data  = await response.json();
    //Add a console.table() expression method to check the data response at this point in the console window.
    console.table(data.companies);// temporary testing of data retreival
    displaySilverGold(data.companies);
}  

getSilverGoldData();

const spotcards = document.querySelector('#spotcards');
const displaySilverGold = (members) => {
    const goldSilverMembers = members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
    const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);//select the members randomly
    // console.table(goldSilverMembers);
    // console.table(selectedMembers);
      selectedMembers.forEach(member => {
        let card= document.createElement("article"); 
        card.setAttribute('class','spot-light');
        //create an h2 element and store it in a variable named "companyName",
        let companyName = document.createElement("h2");
        companyName.setAttribute('class','spot-title'); 
        let logo = document.createElement("img"); 
        let membership = document.createElement("p");  
        companyName.textContent = `${member.name}`; 
        logo.setAttribute('class', 'spot-img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`); // fill in the blank
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '254');
        membership.textContent = `${member.membership_level}`;
        membership.setAttribute('class','spot-message')
        card.appendChild(logo); //fill in the blank
        card.appendChild(companyName); //fill in the blank
        card.appendChild(membership);
        spotcards.appendChild(card);
      });
}