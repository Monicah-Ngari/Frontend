let myCity = document.querySelector("#my-input");
myCity.addEventListener("submit", handleClick);

// Change city

function displayForecast() {
  let days = ["Teu", "Wed", "Thur", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class=""flex-direction: row;">
        <div class="flex-direction: column-2;">
          <div class="forecast-date">${day}</div>
          <div class="weather-icon" id="weather-icon"><img src="src/weather.png" alt="" width="35" /></div>
          <div class="forecast-temp">
            <div class="future-forecast"><strong>18°</strong></div>
            <div class="future-forecast">12°</div>
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
