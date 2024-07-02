const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "0c1ca95d5c1b57fdc96b8db13d4ae32f";
    const url =`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${api_kay}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === 404){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud2.jpg";
            break;
        case 'Clear':
            weather_img.src = "clear2.jpg";
            break;
        case 'Rain':
            weather_img.src = "rain2.jpg";
            break;
        case 'Mist':
            weather_img.src = "mist2.jpg";
            break;
        case 'Snow':
            weather_img.src = "snow2.jpg";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});