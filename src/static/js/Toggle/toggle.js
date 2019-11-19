class Toggle {

    constructor(element, options) {
        this._element = element;
        this._elements = {
            bodyWrapper: document.querySelector('body')
        }

        this._toggle();
    }


    _toggle() {
        const openButton = document.querySelector('.menu-toggle')
        const linkMenu = Array.from(document.querySelectorAll('.link'))
        openButton.addEventListener('click', e => {
            this._elements.bodyWrapper.classList.toggle('wrapper-menu-is-open')
        })
    }

}

export default Toggle
