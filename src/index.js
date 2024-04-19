function searchButton(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-button");
  console.log(searchInput);
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
}
let searchElement = document.querySelector("#search-input-form");
searchElement.addEventListener("submit", searchButton);
