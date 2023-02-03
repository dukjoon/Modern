const feelLikeDisplay = document.querySelector(".feel-like > span");
const windDisplay = document.querySelector(".wind > span");
const weatherDisplay = document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span");
const weatherSelect = document.querySelector("#weather-sele ct");
const info = document.querySelector(".info");


// weatherSelect.addEventListener('change', (e) => {
//     getWeather(e.target.value);
// })

const getWeather = async (lat = 37.541, lon = 126.986) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    const response = await axios.get(url);
    
    const { name, main, weather, wind } = response.data;
    locationDisplay.innerText = name;
    temperatureDisplay.innerText = transferTemperature(main.temp);
    weatherDisplay.setAttribute('src', `https://openweathermap.org/img/wn/${weather[0].icon}.png`);
    windDisplay.innerText = wind.speed;
    feelLikeDisplay.innerText = transferTemperature(main.feels_like);
    console.log(response, response.data.main.temp);
    console.log(response, response.data.name);
  }
"https://openweathermap.org/img/wn/50n.png"
const transferTemperature = (temp) => {
    return (temp - 273.15).toFixed(1);
}

getWeather();