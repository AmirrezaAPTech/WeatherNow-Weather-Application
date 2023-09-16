const apiKey = "d5040fe654edec31e21abb49ed41fcaa&units=metric";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let cityName = document.querySelector('.search-input').value;


async function checkWeather(cityName){
    let response = await fetch(apiUrl + cityName + "&appid=" + apiKey);
    let data = await response.json();
    let weather = document.querySelector('.weather');
    let error = document.querySelector('.error');
    let colContainer = document.querySelector('.col-container');
    console.log(response);
    console.log(data);

    if(response.status === 200) {
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h";
        weather.style.display = "block"
        colContainer.style.display = "flex"
        error.style.display = "none"
    } else if (response.status === 404) {
        weather.style.display = "none"
        colContainer.style.display = "none"
        error.style.display = "block"
    }
    document.querySelector('.search-input').value = "";
   
}

let SearchButton = document.querySelector('.search-button');
SearchButton.addEventListener("click", () => {
    let cityName = document.querySelector('.search-input').value;

    checkWeather(cityName);
})
