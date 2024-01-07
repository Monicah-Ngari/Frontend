function refreshWeather(response) {
  let weatherCondition = document.querySelector("#weather-condition");
  weatherCondition.innerHTML = response.data.condition.description;

  let currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.innerHTML = `$(response.data.temperature.humidity)%`;

  let windSpeed = document.querySelector("#current-speed");
  windSpeed.innerHTML = `$(response.data.wind.speed)km/h`;
}
//api functions
function handleClick(event) {
  event.preventDefault();
  let favCity = document.querySelector("#city-input");
  let h1 = document.querySelector("#my-city");
  h1.innerHTML = favCity.value;
}

let myCity = document.querySelector("#my-input");
myCity.addEventListener("submit", handleClick);

// Change city
function searchCity(city) {
  let apiKey = "1a2a473db97faf41f0088oe8t98271ff";
  let myUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(myUrl).then(refreshWeather);
  console.log(myUrl);
}

// Change Weather conditons

function displayForecast() {
  let days = ["Teu", "Wed", "Thur", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div>
      <div class="row-2">
        <div class="column-2;">
          <div class="forecast-date">${day}</div>
          <div class="weather-icon" id="weather-icon"><img src="src/weather.png" alt="" width="35" /></div>
          <div class="forecast-temp">
            <div class="future-forecast"><strong>18°</strong></div>
            <div class="future-forecast">12°</div>
          </div>
        </div>
      </div>
      </div>
      `;
  });

  let forecast = document.querySelector("#weather-forecast");
  forecast.innerHTML = forecastHtml;
}

displayForecast();

// Weather forecast

searchCity("Nairobi");
