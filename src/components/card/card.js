//move to the parent
class Card {

    constructor(element) {
        this._element = element;

    }

    // _transform() {
    //     this._elements.buttonCard.addEventListener('click', e => {
    //         e.preventDefault();
    //
    //         console.log('clicked from card module')
    //         const clicked = this._element.getAttribute('data-clicked') === "false"
    //         if (clicked) {
    //             this._element.setAttribute('data-clicked', true)
    //         } else {
    //             this._element.setAttribute('data-clicked', false)
    //         }
    //
    //         const leftDiff = this._element.getBoundingClientRect()
    //         this._element.style.transition = `.6s ${easyInSine}`
    //         this._element.style.transform = `translateX(-${leftDiff.left}px)`
    //
    //         if (window.matchMedia("(min-width: 768px)").matches) {
    //             // console.log('from 768px')
    //         } else {
    //             // console.log('less then 768px')
    //             document.querySelector('.card-wrapper').classList.add('mob')
    //         }
    //
    //         //fade other cards
    //         this._fadeOthers()
    //     })
    // }
    //
    // _fadeOthers() {
    //     const notClicked = this._elements.allCards.filter(cards => {
    //         return cards.getAttribute('data-clicked') === "false"
    //     })
    //
    //     notClicked.forEach(card => {
    //         card.classList.add('fadeOut')
    //     })
    // }
}

export default Card
