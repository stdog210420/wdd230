const card = document.querySelector(".card");
const currentTemp = document.querySelector("#weather-info");
const captionDesc= document.querySelector("figcaption");
const lat = 23.31;
const lon = 120.31;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=fed24b2b6ba40b500276cd58d10febd4`;


async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            // console.log(data);
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

function displayResults (data){
    const temp = data.main.temp.toFixed(0);
    temperature = Math.floor((temp-35)*5/9);
    currentTemp.innerHTML = `${temperature}&deg;C`;
    const icon = data.weather[0].icon;
    const iconsrc =`https://openweathermap.org/img/wn/${icon}@2x.png`;
        data.weather.forEach(weather => {
        // Capitalize the first letter of each word in the weather description        
            let desc = data.weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
            const weatherDesc = document.createElement("p");
            weatherDesc.textContent = desc;
            captionDesc.appendChild(weatherDesc);
        });
    card.createElement("Image");
    Image.setAttribute("id","weather-icon");        
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    

}
