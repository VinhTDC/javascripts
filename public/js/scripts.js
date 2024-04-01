const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// ////
// const getCountryData = function(country){

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener("load", function () {
//   const [data] = JSON.parse(this.responseText);
//   try {
//     console.log(data);
//     const lang = Object.values(data.languages);
//     const currencies = Object.values(data.currencies);
//     const currencyNames = currencies.map((cur) => cur.name);
//     const html = `<article class="country">
//                     <img class="country__img" src="${data.flags.png}" />
//                     <div class="country__data">
//                         <h3 class="country__name">${data.name.common}</h3>
//                         <h4 class="country__region">${data.region}</h4>
//                         <p class="country__row"><span>👫</span>${data.population}</p>
//                         <p class="country__row"><span>🗣️</span>${lang}</p>
//                         <p class="country__row"><span>💰</span>${currencyNames}</p>
//                     </div>
//                 </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);

//     countriesContainer.style.opacity = 1;
//   } catch (error) {
//     console.error(error);
//   }
// });
// }
// getCountryData('vietnam');
// getCountryData('usa');
// getCountryData('usa');
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// ////

const renderCountry = function (data) {
  const lang = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  const currencyNames = currencies.map((cur) => cur.name);
  const html = `<article class="country ">
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
};

// const getCountryAndNeighbor = function (country) {
//   //Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     try {
//       console.log(data);
//       // render country 1
//       renderCountry(data);
//       // Get neighbor country
//       const neighbor = data.borders?.[0];
//       if (!neighbor) return;

//       //AJAX call country 2
//       const request2 = new XMLHttpRequest();
//       request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//        const [data2] = JSON.parse(this.responseText);
//        console.log(data2);

//        renderCountry(data2,'neighbor');
//       }) ;
//     } catch (error) {
//       console.error(error);
//     }
//   });
// };
// getCountryAndNeighbor("vietnam");

// const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
const request = fetch("https://restcountries.com/v3.1/name/vietnam");
console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      //Country
     return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};
getCountryData("spain");
