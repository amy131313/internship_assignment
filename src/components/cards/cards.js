const easyInSine = `cubic-bezier(0.77, 0, 0.175, 1)`

class Cards {

    constructor(element) {
        this._element = element
        this._cards = Array.from(this._element.querySelectorAll('.card'))
        this._current = null

        this._initialize()
    }

    _initialize() {
        this._cards.forEach(card => card.querySelector('.button').addEventListener('click', e => this._handleClick(card)))
    }

    _handleClick(element) {
        this._current = element
        if (this._current)
        {
            if (window.matchMedia("(min-width: 768px)").matches) {
                this._moveToTheLeft(this._current)

            } else {
                document.querySelector('.card-wrapper').classList.add('mob')
                this._moveToTheLeft(this._current)
            }

            //fade other
            this._cards.forEach(card => {
                // card === !this._current
                card.classList.add('fadeOut')
                this._current.classList.remove('fadeOut')
            })
        }
    }

    _moveToTheLeft(element) {
        element.classList.add('take-hover')
        const leftDiff = element.getBoundingClientRect()
        element.style.transition = `.6s ${easyInSine}`
        element.style.transform = `translateX(-${leftDiff.left}px)`
    }

}

export default Cards
