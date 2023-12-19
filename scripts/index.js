/* EVENT DELEGATION */
/* Paselectinami visi vaikiniai elemetnai */

// document
//     .querySelector('#myList')
//     .addEventListener('click', function(e){
//         console.log(`You clicked on item ${e.target.innerHTML}`)
//     })

/* END*/


/* CLOSURE */

// function outerFunction(outerVariable){
//     return function innerFunction(innerVariable){
//         console.log('Outer variable: ' + outerVariable);
//         console.log('Inner variable: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outer')
// newFunction('inner')

/* END */

/* AJAX - ASINCHRONOUS JAVASCRIPT AND XML

To summarize:

AJAX is a use of XMLHTTPRequest object to comunicate with servers.

XML is old type of data, now most of DEVs other types of data.
For example: JSON, XML, HTML or just plain text

AJAX is a web developement techique.

xhr - XMLHTTPRequest

*/
import CountryCard from "./Classes/countryCard.js";

const countriesDiv = document.querySelector('#shownCountries')

function showCountries(){
    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function(){
        if (xhr.status === 200) {
            let countries = JSON.parse(this.response)
            console.log(countries)
            countries.forEach(country => {
                if (country.continents[0] === 'Europe'){
                    const cardCountry = new CountryCard({
                        country: country,
                        loadDirectory: countriesDiv
                    });
                }
            });
        } else {
            console.log('Your request status is: ' + xhr.status)
        }
    }

    xhr.send();
}

document
    .querySelector('#countriesButton')
    .addEventListener('click', showCountries)