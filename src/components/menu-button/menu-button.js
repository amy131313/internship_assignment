class MenuButton {

    constructor(element) {
        this._element = element;
        this._openClose();
    }

    _openClose() {
        this._element.addEventListener('click', e => {
            const opened = this._element.getAttribute('data-opened') === "false"
            if(opened) {
              this._element.setAttribute('data-opened', true);
            } else {
              this._element.setAttribute('data-opened', false);
            }
            //click on the main to close the button
            if (opened) {
                document.querySelector('main').addEventListener('click', e => {
                    this._element.setAttribute('data-opened', false)
                    document.querySelector('body').classList.remove('wrapper-menu-is-open')
                }, false)
            }
        })
    }
}

export default MenuButton
