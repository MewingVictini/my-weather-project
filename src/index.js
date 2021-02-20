function showDate() {
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[day];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${currentDay}, ${hours}:${minutes}`;
}
let displayCurrentDate = document.querySelector("#today-date");
let now = new Date();
displayCurrentDate.innerHTML = showDate(now);

function displayWeather(response) {
  document.querySelector("#main-city").innerHTML = response.data.name;
  document.querySelector("#temperature-display").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
}

function searchForWeather(city) {
  let apiKey = "98fa00266e2c5f181711e73ca4f8030a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchForWeather(city);
}

let citySearchEngine = document.querySelector("#search-engine");
citySearchEngine.addEventListener("submit", handleSubmit);

searchForWeather("New York");
