class ContentLink {

    constructor(element) {
        this._element = element;
        this._atag = this._element.querySelector('a span')
        this._showFirst()
    }
    _showFirst() {
        if(this._atag.innerHTML.length > 40) {
            this._atag.innerHTML = this._atag.innerHTML.substring(0,30)+"...";
        }
    }
}

export default ContentLink;
