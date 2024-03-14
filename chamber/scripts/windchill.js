    // Get input values
    // const temperature = parseFloat(document.getElementById('temperature').value);
    // const windSpeed = parseFloat(document.getElementById('windSpeed').value);
    const degree = document.getElementById('degree');
    const weatherIcon = document.querySelector("#weather-icon");
    const captionDesc= document.querySelector("figcaption");
    const windSpeed = document.getElementById('wind');
    const humidElement = document.getElementById('humid');
    const lat = 23.31;
    const lon = 120.31;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=fed24b2b6ba40b500276cd58d10febd4`;
    const weekDay = document.querySelector("#weekDay");
    const urlForcast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=fed24b2b6ba40b500276cd58d10febd4`;
    const tempDay1 = document.querySelector("#tempDay1");
    const iconDay1 = document.querySelector("#iconDay1");
    const descDay1 = document.querySelector("#descDay1");
    const tempDay2 = document.querySelector("#tempDay2");
    const iconDay2 = document.querySelector("#iconDay2");
    const descDay2 = document.querySelector("#descDay2");
    const tempDay3 = document.querySelector("#tempDay3");
    const iconDay3 = document.querySelector("#iconDay3");
    const descDay3 = document.querySelector("#descDay3");
    const weekDay1 = document.querySelector("#weekDay1");
    const weekDay2 = document.querySelector("#weekDay2");
    const weekDay3 = document.querySelector("#weekDay3");
    // built weekdays strings
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
      let temp = data.main.temp.toFixed(0);
      temperature = Math.floor((temp-35)*5/9);
      degree.innerHTML = `${temperature}&deg;C`;
      let humid = data.main.humidity.toFixed(0);
      humidElement.innerHTML = `${humid}RH`;
      let wind = data.wind.speed.toFixed(0);
      windSpeed.innerHTML = `${wind}(mph)`;
      let icon = data.weather[0].icon;
      let iconsrc =`https://openweathermap.org/img/wn/${icon}@2x.png`;
      // const iconsrc = "https://openweathermap.org/img/wn/04n@2x.png";
      data.weather.forEach(weather => {
        // Capitalize the first letter of each word in the weather description        
            let desc = data.weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
            const weatherDesc = document.createElement("p");
            weatherDesc.textContent = desc;
            captionDesc.appendChild(weatherDesc);
        });        
      weatherIcon.setAttribute("src", iconsrc);
      weatherIcon.setAttribute("alt", desc);
    }

  function calculateWindChill() {
    // Check if input values meet the specification limits
    if (temperature <= 10 && windSpeed > 3.0) {
      // Calculate wind chill factor
      const windChill = calculateWindChillFactor(temperature, windSpeed);
      document.getElementById('windChillResult').textContent = `Wind Chill Factor: ${windChill.toFixed(2)} °C`;
    } else {
      document.getElementById('windChillResult').textContent = 'N/A';
    }
  }

  function calculateWindChillFactor(temperature, windSpeed) {
    // Formula to calculate wind chill factor
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChill;
  }


  async function forcastApiFetch(){
    try{
      const responseForcast = await fetch(urlForcast);
      if (responseForcast.ok) {
        const dataForcast = await responseForcast.json();
        console.log(dataForcast);
        displayForcastResults(dataForcast);           
      }
      else{
        throw Error (await responseForcast.text());
      }
    }
    catch (error){
      console.log(error);        
    }
  }
  forcastApiFetch()

  function displayForcastResults(dataForcast){
    const forcastTemp1 = dataForcast.list[8].main.temp.toFixed(0);
    const forcastTempC1 = Math.floor((forcastTemp1-35)*5/9);
    tempDay1.innerHTML = `${forcastTempC1}&deg;C`;
    const forcastTemp2 = dataForcast.list[16].main.temp.toFixed(0);
    const forcastTempC2 = Math.floor((forcastTemp2-35)*5/9);
    tempDay2.innerHTML = `${forcastTempC2}&deg;C`;
    const forcastTemp3 = dataForcast.list[24].main.temp.toFixed(0);
    const forcastTempC3 = Math.floor((forcastTemp3-35)*5/9);
    tempDay3.innerHTML = `${forcastTempC3}&deg;C`;
    const icon1 = dataForcast.list[8].weather[0].icon;
    const iconsrc1 =`https://openweathermap.org/img/wn/${icon1}@2x.png`;
    const icon2 = dataForcast.list[16].weather[0].icon;
    const iconsrc2 =`https://openweathermap.org/img/wn/${icon2}@2x.png`;
    const icon3 = dataForcast.list[24].weather[0].icon;
    const iconsrc3 =`https://openweathermap.org/img/wn/${icon3}@2x.png`;

// Capitalize the first letter of each word in the weather description        
    const desc1 = dataForcast.list[8].weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
    const weatherDesc1 = document.createElement("p");
    weatherDesc1.textContent = desc1;
    descDay1.appendChild(weatherDesc1);
    const desc2 = dataForcast.list[16].weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
    const weatherDesc2 = document.createElement("p");
    weatherDesc2.textContent = desc2;
    descDay2.appendChild(weatherDesc2);
    const desc3 = dataForcast.list[24].weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
    const weatherDesc3 = document.createElement("p");
    weatherDesc3.textContent = desc3;
    descDay3.appendChild(weatherDesc3);
    iconDay1.setAttribute("src", iconsrc1);
    iconDay1.setAttribute("alt", desc1);
    iconDay2.setAttribute("src", iconsrc2);
    iconDay2.setAttribute("alt", desc2);
    iconDay3.setAttribute("src", iconsrc3);
    iconDay3.setAttribute("alt", desc3);

    const dateStr = dataForcast.list[0].dt_txt;
    console.log(dateStr); 
    const date = new Date(dateStr);
    const weekday = weekdays[date.getDay()];
    weekDay.textContent = weekday;

    const dateStr1 = dataForcast.list[8].dt_txt;
    const date1 = new Date(dateStr1);
    const weekday1 = weekdays[date1.getDay()];
    weekDay1.textContent = weekday1;
    const dateStr2 = dataForcast.list[16].dt_txt;
    const date2 = new Date(dateStr2);
    const weekday2 = weekdays[date2.getDay()];
    weekDay2.textContent = weekday2;
    const dateStr3 = dataForcast.list[24].dt_txt;
    const date3 = new Date(dateStr3);
    const weekday3 = weekdays[date3.getDay()];
    weekDay3.textContent = weekday3;
    // get date and formate
    // const day1 = date1.getDate();
    // const formattedDate1 = `${weekday1}`;
}






