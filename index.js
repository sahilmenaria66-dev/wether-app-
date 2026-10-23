let searchCity = document.querySelector(".search-city");
let tempreture = document.querySelector(".temperature-number");
let tempretureEng = document.querySelector(".temperature-condition");
let windSpeed = document.querySelector(".detail-value1");
let humiditySpeed = document.querySelector(".detail-value2");
let fillsLikeWether = document.querySelector(".detail-value3");
let realoadBtn = document.querySelector(".reload-button");
let welcome = document.querySelector(".welcome");
let londonBtn = document.querySelector(".londonButton")
let newYorkBtn = document.querySelector(".newyorkButton")


function londonWether(){

let wetherApi = fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=bd5e378503939ddaee76f12ad7a97608&units=metric')
.then(response => response.json())
.then(data => {
    let temp = data.main.temp;
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;
    let city = data.name;
    let tempEng = data.weather[0].main;
    let wind = data.wind.speed; 
    let humidity = data.main.humidity;
    let fillsLike = data.main.feels_like;

  
  tempreture.textContent = `${temp}°C`
  tempretureEng.textContent = `${tempEng}`
  windSpeed.textContent = `${wind} km/h` 
  humiditySpeed.textContent = `${humidity}%`
  fillsLikeWether.textContent = `${fillsLike}°C`

})
}

 function newYorkWeather(){
  let weatherApiNewYork = fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=America%2FNew_York")
 .then(data => data.json())
 .then(data => {
 let name = data.timezone
 let temp = data.current.temperature_2m
 let humidityprasent = data.current.relative_humidity_2m
 let windSpeedd = data.current.wind_speed_10m
 let fillsLike = data.current.apparent_temperature
 let tempretureEnglish = `cloudy/sunny`
 

 tempreture.textContent = `${temp}°C`
 tempretureEng.textContent = `${tempretureEnglish}`
 humiditySpeed.textContent = `${humidityprasent}%`
 windSpeed.textContent = `${windSpeedd}km/h`
 fillsLikeWether.textContent = `${fillsLike}°C`
 })
 }




 realoadBtn.addEventListener("click",()=>{
  londonBtn.classList.remove("underline")
  newYorkBtn.classList.remove("underline")
  welcome.classList.remove("hidden")
  welcome.textContent = "Welcome to Weather App"
  windSpeed.textContent = ""
  fillsLikeWether.textContent =  ""
  humiditySpeed.textContent = ""
  tempreture.textContent = ""
  tempretureEng.textContent = ""
 })

 
londonBtn.addEventListener("click",()=>{
  londonWether()
  welcome.classList.add("hidden")
  newYorkBtn.classList.remove("underline")
  londonBtn.classList.add("underline")
})


newYorkBtn.addEventListener("click",()=>{
  newYorkWeather()
   welcome.classList.add("hidden")
  londonBtn.classList.remove("underline")
  newYorkBtn.classList.add("underline")
})


