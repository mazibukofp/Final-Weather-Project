function weatherFocast(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temperature");
  let temp = Math.round(response.data.temperature.current);
  tempElement.innerHTML = temp;
  let icon = document.querySelector(".temp-image");
  let iconElement = `<img src ="${response.data.condition.icon_url}"/>`;
  icon.innerHTML = iconElement;
  let conditionElement = document.querySelector("#weatherCondition");
  conditionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#tempHumidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windELement = document.querySelector("#windTemp");
  windELement.innerHTML = `${response.data.wind.speed}Km/h`;
}

function searchEngine(city) {
  let apiKey = "64ff4bb3f1cb03t54443a9aod8ab5582";
  let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(weatherUrl).then(weatherFocast);
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

function dailyForecast() {
  let days = ["Mon", "Tue", "Wed", "Thur", "Fri"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast">
          <div class="row">
            <div class="col-2">
              <div class="daily-weather">${day}</div>
              ☁️
              <div>
                <span class="max-temp">18°</span>
                <span class="min-temp">13°</span>
              </div>
            </div>
          </div>
        </div>
      `;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
dailyForecast();
