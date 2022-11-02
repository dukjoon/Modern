const feelLikeDisplay = document.querySelector(".feel-like > span")
const windDisplay = document.querySelector(".wind > span")
const weatherDisplay = document.querySelector(".weather > img")
const locationDisplay = documnet.querySelector(".location")
const temperatureDisplay = document.querySelector(".temperature")

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json,'json'))
// Make a request for a user with a given ID

const API_KEY = "e901d571351bc2d93b053477da7743c5";
// const city = "seoul";
// const url = "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}";
// //서울 날씨 불러오기 성공
// axios.get(url)
//   .then(res => console.log(res)).catch(err => console.log(err));


const getWeather = async (lat = 37.541, lon = 126.986) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  const response = await axios.get(url);
  console.log(response, response.data.name);
}
getWeather()
  // .then(function (response) {
  //   // handle success
  //   console.log(response, 'success');
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error, 'error');
  // })
  // .finally(function () {
  //   // always executed
  // });
