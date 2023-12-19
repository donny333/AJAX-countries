import NewHtmlElement from "../helpers/htmlElement.js";

export default class Modal{
    constructor({country}){
        this.country = country;
        return this.render()
    }
    render(){
        this.overlayDiv = NewHtmlElement('div', 'test')

        document.querySelector('body').append(this.overlayDiv);
    }
}