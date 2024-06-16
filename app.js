const apiKey = "cce89ed839d8b3eb035cac272cbb376d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBtn = document.querySelector("#searchBtn");
var citiName = document.querySelector('#cityName')
var weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {   
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json()

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block"
    } else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML =
            Math.round(data.wind.speed) + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mis.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./images/wind.png";
        } else if (data.weather[0].main == "Wind") {
            weatherIcon.src = "./images/wind.png";
        }

        document.querySelector(".weather").style.display = "block";
        citiName.value = ''
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(citiName.value);
});
