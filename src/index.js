function weatherForecast(response) {
  let tempElement = document.querySelector("#temperature");
  let temp = Math.round(response.data.temperature.current);
  let icon = document.querySelector(".temp-image");
  let iconElement = `<img src ="${response.data.condition.icon_url}"/>`;
  let conditionElement = document.querySelector("#weatherCondition");
  let humidityElement = document.querySelector("#tempHumidity");
  let windELement = document.querySelector("#windTemp");
  let currentTime = formatDay(new Date());
  let forecastElement = document.querySelector("#currentTime");

  tempElement.innerHTML = temp;
  icon.innerHTML = iconElement;
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windELement.innerHTML = `${response.data.wind.speed}Km/h`;
  forecastElement = currentTime;

  getWeatherForecast(response.data.city);
}

function searchEngine(city) {
  let apiKey = "64ff4bb3f1cb03t54443a9aod8ab5582";
  let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(weatherUrl).then(weatherForecast);
}

function searchButton(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-button");
  let city = document.querySelector("#city");

  city.innerHTML = searchInput.value;

  searchEngine(searchInput.value);
}
let searchElement = document.querySelector("#search-input-form");
searchElement.addEventListener("submit", searchButton);

let paragraph = document.querySelector(".daysAndTime");

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saurday",
];

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

paragraph.innerHTML = `${day} ${hours}:${minutes}`;

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return days[date.getDay()];
}

function dailyForecast(response) {
  let forecastHtml = "";
  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
      <div class="weather-forecast">
          <div class="row">
            <div class="col-2">
              <div class="daily-weather">${formatDay(day.time)}</div>
          <div><img src="${day.condition.icon_url}" class="weather-icon"/></div>
              <div>
                <span class="max-temp">${Math.round(
                  day.temperature.maximum
                )}°</span>
                <span class="min-temp">${Math.round(
                  day.temperature.minimum
                )}°</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

function getWeatherForecast(city) {
  let apiKey = "64ff4bb3f1cb03t54443a9aod8ab5582";
  let weatherForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(weatherForecastUrl).then(dailyForecast);
}

searchEngine("Paris");
