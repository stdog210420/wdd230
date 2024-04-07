    // Get input values
    // const temperature = parseFloat(document.getElementById('temperature').value);
    // const windSpeed = parseFloat(document.getElementById('windSpeed').value);
    const today =document.getElementById("today");
    const tomorrow = document.getElementById("tomorrow");
    const degree = document.getElementById("degree");
    const maxdegree = document.querySelector(".maxdegree");
    const weatherIcon = document.querySelector("#weather-icon");
    const descDay= document.querySelector("#descDay");
    const humidElement = document.getElementById("humid");
    const humidElement1 = document.getElementById("humid1");
    const lat = 20.425;
    const lon = -87.028;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=fed24b2b6ba40b500276cd58d10febd4`;
    const weekDay = document.querySelector("#weekDay");
    const urlForcast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=fed24b2b6ba40b500276cd58d10febd4`;
    const tempDay1 = document.querySelector("#tempDay1");
    const descDay1 = document.querySelector("#descDay1");
    const iconDay1 = document.querySelector("#iconDay1");
    const weekDay1 = document.querySelector("#weekDay1");
    // built weekdays strings
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    async function apiFetch(){
      try{
        const response = await fetch(url);
        if (response.ok) {
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

    function displayResults(data){
      const temp = data.main.temp.toFixed(0);
      const maxtemp = data.main.temp_max.toFixed(0);
      temperature = Math.floor((temp-35)*5/9);
      maxTemperature= Math.floor((maxtemp-35)*5/9);
      degree.innerHTML = `${temperature}&deg;C`;
      maxdegree.innerHTML = `${maxTemperature}&deg;C`;
      const caution = document.querySelector(".caution")
      if (maxTemperature > 27){
        caution.innerHTML= `hot, please apply sunscreen and stay hydrated.`;
      }
      else{
        caution.innerHTML= `a little cold, please bring a light jacket.`;
      }
      const humid = data.main.humidity.toFixed(0);
      humidElement.innerHTML = `${humid}RH`;
      const icon = data.weather[0].icon;
      const iconsrc =`https://openweathermap.org/img/wn/${icon}@2x.png`;
      // const iconsrc = "https://openweathermap.org/img/wn/04n@2x.png";
      data.weather.forEach(weather => {
        // Capitalize the first letter of each word in the weather description        
            const desc = data.weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
            const weatherDesc = document.createElement("p");
            weatherDesc.textContent = desc;
            console.log(desc);
            descDay.appendChild(weatherDesc);
            weatherIcon.setAttribute("src", iconsrc);
            weatherIcon.setAttribute("alt", desc);
        });        
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
    const todayDate = dataForcast.list[0].dt_txt;
    const dateObject = new Date(todayDate);
    // 提取年、月、日
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // 月份需補零
    const day = String(dateObject.getDate()).padStart(2, '0'); // 日需補零    
    // 格式化日期為所需格式
    const formattedDate = `${year}/${month}/${day}`;
    today.innerHTML = formattedDate;
    const dateStr = dataForcast.list[0].dt_txt;
    // console.log(dateStr); 
    const date = new Date(dateStr);
    const weekday = weekdays[date.getDay()];
    weekDay.textContent = weekday;

    const tomorrowDate = dataForcast.list[9].dt_txt;
    const dateObject1 = new Date(tomorrowDate);
    // 提取年、月、日
    const year1 = dateObject1.getFullYear();
    const month1 = String(dateObject1.getMonth() + 1).padStart(2, '0'); // 月份需補零
    const day1 = String(dateObject1.getDate()).padStart(2, '0'); // 日需補零    
    // 格式化日期為所需格式
    const formattedDate1 = `${year1}/${month1}/${day1}`;
    tomorrow.innerHTML = formattedDate1;
    const dateStr1 = dataForcast.list[9].dt_txt;
    const date1 = new Date(dateStr1);
    const weekday1 = weekdays[date1.getDay()];
    weekDay1.textContent = weekday1;

    const forcastTemp1 = dataForcast.list[9].main.temp.toFixed(0);
    const forcastTempC1 = Math.floor((forcastTemp1-35)*5/9);
    tempDay1.innerHTML = `${forcastTempC1}&deg;C`;
    const humid1 = dataForcast.list[9].main.humidity;
    humidElement1.innerHTML= `${humid1}RH`;;
    const icon1 = dataForcast.list[9].weather[0].icon;
    const iconsrc1 =`https://openweathermap.org/img/wn/${icon1}@2x.png`;

// Capitalize the first letter of each word in the weather description        
    const desc1 = dataForcast.list[9].weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
    const weatherDesc1 = document.createElement("p");
    weatherDesc1.textContent = desc1;
    descDay1.appendChild(weatherDesc1);
    iconDay1.setAttribute("src", iconsrc1);
    iconDay1.setAttribute("alt", desc1);

}






