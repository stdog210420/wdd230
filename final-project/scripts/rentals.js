
const url = "https://stdog210420.github.io/wdd230/final-project/data/rentals.json";
// const url = "/final-project/data/rentals.json";

const table = document.querySelector('.table');
async function getLinks(){
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

getLinks();

function displayResults(data) {    
    // 獲取 vehicles 屬性
    // 遍歷每輛車輛
    data.vehicles.forEach(vehicle => {
        let vehicleName = vehicle.vehicle;
        // console.log(vehicleName);
        // 遍歷每個租賃類型
        vehicle['Rental Types'].forEach(rentalType => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="carName">${vehicleName}</td>
                <td>${vehicle['Max Persons']}</td>
                <td>${rentalType['Half Day (3 hrs)']['Reservation']}</td>
                <td>${rentalType['Full Day']['Reservation']}</td>
                <td>${rentalType['Half Day (3 hrs)']['Walk-In']}</td>
                <td>${rentalType['Full Day']['Walk-In']}</td>
            `;
            table.appendChild(row);
        });
    });
}

