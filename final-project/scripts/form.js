const country = document.getElementById('country');
const url = `https://restcountries.com/v3.1/all?fields=name`;

async function apiFetch(){
    try{
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);           
      }
      else{
        throw Error (await response.text());
      }
    }
    catch (error){
      console.log(error);        
    }
  }
  apiFetch();

  function displayResults(data){
    data.forEach(country => {
        // Capitalize the first letter of each word in the weather description        
            const countryname = country[0].name.replace(/\b\w/g, char => char.toUpperCase());
            country.innerHTML = `${countryname}&deg;C`;
        }); 

      
  }