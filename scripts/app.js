const cityForm = document.querySelector("form");

const updateCity = async city => {
  // console.log(city);

  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets: cityDets,
    wether: weather
  };
};

cityForm.addEventListener("submit", e => {
  e.preventDefault(); //prevent default form action(clearing)

  const city = cityForm.city.value.trim();
  cityForm.reset(); // clears form field

  //update the ui with new city
  updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
