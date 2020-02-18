const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

//update data to DOM
const updateUI = data => {
  /**
    remove retrieved info from data object by assigning to a variable, 
    const cityDets = data.cityDets;
    const weather = data.weather;
  */

  console.log(data);

  //syntax to destructure properties
  const { cityDets, weather } = data;

  /**
    update details template
    use info variables in template literal
*/
  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather}.WeatherText</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;

  /**
    d-none added to prevent searh result from appearing until `enter`
    remove d-none class if present
  */
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async city => {
  // console.log(city);
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return { cityDets, weather }; // when property name is the same as the value
};

cityForm.addEventListener("submit", e => {
  e.preventDefault(); //prevent default form action from occuring(clearing)

  const city = cityForm.city.value.trim();
  cityForm.reset(); // resets form field

  //update the ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
