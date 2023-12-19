import Element from "../helpers/htmlElement.js";

export default class Modal {
    constructor({country}){
        this.country = country;
        return this.render()
    }
    render(){
        console.log(this.country);
        this.modalDiv = new Element('div');
        this.modalDiv.setAttribute('id', 'modal');

        this.modalH1 = new Element('h1', this.country.name.official);

        this.modalImg = new Element('img');
        this.modalImg.setAttribute('src', this.country.flags.svg);
        this.modalImg.setAttribute('alt', `${this.country.name.official} flag`);

        this.capitalPar = new Element('p', 'Capital: ');
        this.continentPar = new Element('p', 'Continent: ');

        this.capitalStrong = new Element('strong', this.country.capital[0]);
        this.continentStrong = new Element('strong', this.country.continents[0]);

        this.capitalPar.append(this.capitalStrong);
        this.continentPar.append(this.continentStrong);

        this.linkToMap = new Element('a', 'See on Google Maps');
        this.linkToMap.setAttribute('href', this.country.maps.googleMaps);
        this.linkToMap.setAttribute('target', '_blank');

        this.modalDiv.append(this.modalH1, this.modalImg, this.capitalPar, this.continentPar, this.linkToMap);

        return this.modalDiv;
    }
}