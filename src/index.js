function refreshWeather(response) {
  let cityElement = document.querySelector("#city");
  let weatherCondition = document.querySelector("#weather-condition");
  let currentHumidity = document.querySelector("#current-humidity");
  let windSpeed = document.querySelector("#current-speed");
  let temperature = document.querySelector("#temp");
  let weatherIcon = document.querySelector("#icon");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  cityElement = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  currentHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  temperature.innerHTML = Math.round(response.data.temperature.current);
  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" width="35" />`;
  timeElement.innerHTML = formatDate(date);
  getForecast(response.data.city);
}

//api functions

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Teusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes},`;
}

// change date

function searchCity(event) {
  event.preventDefault();
  let city = document.getElementById("city-input").value;
  let heading = document.querySelector("#city");
  console.log(city);
  heading.innerHTML = city;
  let apiKey = "1a2a473db97faf41f0088oe8t98271ff";
  let myUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(myUrl).then(refreshWeather);
  // axios.get(myUrl).then((response) => {
  //   console.log(response.data);
  // });
}

// Change Weather conditons

function getForecast(city) {
  let myKey = "1a2a473db97faf41f0088oe8t98271ff";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${myKey}`;
  axios.get(apiUrl).then(displayForecast);
  // console.log(apiUrl);
}

// ForecastAPI
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Teu", "Wed", "Thur", "Fri", "Sat"];
  return days[date.getDay()];
}

// Forecast day
function displayForecast() {
  let days = ["Sun", "Mon", "Teu", "Wed", "Thur"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="row">
          <div class="forecast-date">${day}</div>
          <div class="weather-icon" id="weather-icon"><img src="src/weather.png" alt="" width="35"/></div>
          <div class="forecast-temp">
            <div class="future-forecast"><strong>18°</strong></div>
            <div class="future-forecast"> 12°</div>
          </div>
      </div>
   `;
  });

  let forecast = document.querySelector("#weather-forecast");
  forecast.innerHTML = forecastHtml;
}

displayForecast();

// Weather forecast
function handleClick(event) {
  event.preventDefault;
}

let myCity = document.querySelector("#my-input");
myCity.addEventListener("submit", handleClick);

// Change city

searchCity();
