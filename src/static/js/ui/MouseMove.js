class MouseMove {
    constructor(element) {
        this._element = element;
        this._eyes = Array.from(document.querySelectorAll('.eye'))

        this._moveIt();
    }

    _moveIt() {
        this._element.addEventListener('mousemove', event => {

            this._eyes.forEach(eye => {
                const x = eye.offsetLeft + (eye.offsetWidth / 2);
                const y = eye.offsetTop + (eye.offsetHeight / 2 );

                const rad = Math.atan2(event.pageX - x, event.pageY - y);
                const rot = (rad * (180 / Math.PI) * -1) + 180;
                eye.style.transform = `rotate(${rot}deg)`

            })

        })
    }
}
export default MouseMove;
