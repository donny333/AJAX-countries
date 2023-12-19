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

function showCountries(){
    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function(){
        if (xhr.status) {
            console.log('Success')
        } else {
            console.log('Fail')
        }
    }

    xhr.send();
}

document
    .querySelector('#countriesButton')
    .addEventListener('click', showCountries)