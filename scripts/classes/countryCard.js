import HtmlElement from "../helpers/htmlElement.js";

export default class CountryCard {
    constructor({country, loadDirectory}){
        this.country = country;
        this.loadDirectory = loadDirectory;
        return this.render()
    }

    render(){
        this.countriesDiv = document.querySelector('#shownCountries')

        this.countryDiv = document.createElement('div');
        this.countryDiv.classList.add('country')

        this.nameH1 = document.createElement('h1');
        this.nameNode = document.createTextNode(this.country.name.official);
        this.nameH1.append(this.nameNode);

        this.flagImg = document.createElement('img');
        this.flagImg.setAttribute('src', this.country.flags.svg);
        this.flagImg.setAttribute('alt', `${this.country.name.official} flag`);
        this.runModal();

        this.countryDiv.append(this.nameH1, this.flagImg)
        this.loadDirectory.append(this.countryDiv);
    }
    runModal(){
        this.testDiv = new HtmlElement('h1', this.country.name.official);
        console.log(this.testDiv)
        
        document.querySelector('#appendArea').append(this.testDiv)
    }
}