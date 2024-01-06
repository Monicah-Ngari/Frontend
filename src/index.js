function displayForecast() {
  let days = ["Teu", "Wed", "Thur", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml += `
      <div class="row">
        <div class="col-2">
          <div class="forecast-date">${day}</div>
          <div class="weather-icon" id="weather-icon"><img src="src/weather.png" alt="" width="35" /></div>
          <div class="forecast-temp">
            <span class="current-forecast"><strong>18°</strong></span>
            <span class="future-forecast">12°</span>
          </div>
        </div>
      </div>
      `;
  });

  let forecast = document.querySelector("#weather-forecast");
  forecast.innerHTML = forecastHtml;
}

displayForecast();
