import mapNumber from '../../static/js/utils/mapNumber'

class IntroCard {
    constructor(element) {
        this._element = element;
        this._elements = {
            content: document.querySelector('.main-content'),
            buttonCard: document.querySelector('.button')
        }
        this._elements.content.addEventListener('scroll', this._scroll)
        this._scroll();
    }

    _scroll = () => {

        const y = this._elements.content.scrollTop
        const offsetHeight = this._elements.content.offsetHeight
        const scrollHeight = this._elements.content.scrollHeight
        const highMaxContent = scrollHeight - offsetHeight
        const scrollX = mapNumber(y, 0, highMaxContent, 0, 100)
        this._element.style.backgroundPositionX = `${ scrollX }% `
    }
}

export default IntroCard
