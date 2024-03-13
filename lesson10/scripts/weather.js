const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc= document.querySelector("figcaption");
// const latitude = 49.76; // Latitude of Trier, Germany
// const longitude = 6.64; // Longitude of Trier, Germany
// const apiKey = 'fed24b2b6ba40b500276cd58d10febd4'; // actual API key

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.76&lon=6.64&units=imperial&appid=fed24b2b6ba40b500276cd58d10febd4';

async function apiFetch(){
    try{
        const response = await fetch(url); 
        if (response.ok){
            const data  = await response.json();
            // console.log(data);
            displayResults(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data){
    // Format temperature with zero decimal places
    const temperature = data.main.temp.toFixed(0);
    currentTemp.innerHTML = `${temperature}&deg;F`;
    const iconsrc = "https://openweathermap.org/img/wn/04d@2x.png";
    // let desc = data.weather[0].description;

    //Since the data can return more than one "weather event", display all the events versus just the first one
    data.weather.forEach(weather => {
    // Capitalize the first letter of each word in the weather description        
        let desc = data.weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
        const weatherDesc = document.createElement("p");
        weatherDesc.textContent = desc;
        captionDesc.appendChild(weatherDesc);
    });
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    // captionDesc.textContent=`${desc}`;
    // console.log(desc);
}