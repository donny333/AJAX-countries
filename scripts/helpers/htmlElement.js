export default class HtmlElement {
    constructor(tagName, textNode = ''){
        this.tagName = tagName;
        this.textNode = textNode;
        return this.render();
    }
    render(){
        this.newElement = document.createElement(this.tagName);
        this.newElementTextNode = document.createTextNode(this.textNode);
        this.newElement.append(this.newElementTextNode);

        return this.newElement;
    }
}