function weatherFocast(response) {
  let tempElement = document.querySelector("#temperature");
  let temp = Math.round(response.data.temperature.current);
  tempElement.innerHTML = temp;
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
