import Element from "../helpers/htmlElement.js";
import Modal from "./mod.js";

export default class CountryCard {
    constructor({country, loadDirectory}){
        this.country = country;
        this.loadDirectory = loadDirectory;
        return this.render()
    }

    render(){
        this.countriesDiv = document.querySelector('#shownCountries')

        this.countryDiv = new Element('div');
        this.countryDiv.classList.add('country')

        this.nameH1 = new Element('h1', this.country.name.official);

        this.flagImg = new Element('img');
        this.flagImg.setAttribute('src', this.country.flags.svg);
        this.flagImg.setAttribute('alt', `${this.country.name.official} flag`);
        this.runModal();

        this.countryDiv.append(this.nameH1, this.flagImg)
        this.loadDirectory.append(this.countryDiv);
    }
    runModal(){
        this.flagImg.addEventListener('click', ()=>{
            this.overlayDiv = new Element('div');
            this.overlayDiv.classList.add('overlay');

            this.modal = new Modal({country: this.country});

            this.body = document.querySelector('body');
            this.body.append(this.overlayDiv, this.modal);
            this.body.classList.add('overflowHid');
        })
    }
}