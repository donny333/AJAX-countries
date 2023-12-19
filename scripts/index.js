import CountryCard from "./Classes/countryCard.js";

const countriesDirectory = document.querySelector('#shownCountries')

function showCountries(){
    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function(){
        if (xhr.status === 200) {
            let countries = JSON.parse(this.response)
            console.log(countries)
            countries.forEach(country => {
                const cardCountry = new CountryCard({
                    country: country,
                    loadDirectory: countriesDirectory
                });
            });
        } else {
            console.log('Your request status is: ' + xhr.status)
        }
    }

    xhr.send();
}

showCountries();