const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

////
const getCountryData = function(country){

const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  try {
    console.log(data);
    const lang = Object.values(data.languages);
    const currencies = Object.values(data.currencies);
    const currencyNames = currencies.map((cur) => cur.name);
    const html = `<article class="country">
                    <img class="country__img" src="${data.flags.png}" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name.common}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${data.population}</p>
                        <p class="country__row"><span>🗣️</span>${lang}</p>
                        <p class="country__row"><span>💰</span>${currencyNames}</p>
                    </div>
                </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    
    countriesContainer.style.opacity = 1;
  } catch (error) {
    console.error(error);
  }
});
}
getCountryData('vietnam');
getCountryData('usa');
getCountryData('usa');
