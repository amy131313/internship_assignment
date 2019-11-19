import {initializeComponents} from '../utils/initializeComponents'
import {getHTML, path} from "../utils/helpers"

class Router {

    constructor(element, options) {

        this._element = element;
        this._options = {...Router.options, ...options};

        this._refs = {
            links: Array.from(element.querySelectorAll(this._options.linkSelector)),
            displayArea: document.getElementById(this._options.displayAreaId)
        };

        window.addEventListener('popstate', e => this._onPopState(e.state))
        window.addEventListener('pageupdated', () => this._bindE());

        this._bindE()

        const url = path(window.location.href)
        history.replaceState({id: this._options.displayAreaId, url}, null, url)
        window.dispatchEvent(new CustomEvent('changestate'))
    }

    _bindE()
    {
        this._refs.links = Array.from(this._element.querySelectorAll(this._options.linkSelector))
        this._refs.links.forEach(link => link.addEventListener('click', e => this._onClick(e)))
    }


    static options = {
        'linkSelector': 'a',
        'displayAreaId': 'main'
    }

    _onPopState(state) {

        if (state && state.url && state.id === this._options.displayAreaId) {
            this._navigate(state.url)
        }
    }


    _onClick(e) {
        e.preventDefault()
        const url = e.currentTarget.href
        if (path(url) === path(window.location.href)) return

        this._navigate(url)

        history.pushState({id: this._options.displayAreaId, url}, null, url)
        window.dispatchEvent(new CustomEvent('changestate'))
    }



    _navigate(url) {

        getHTML(url, '#' + (this._options.displayAreaId))
            .then(html => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(html), 500)
                })
            })
            .then(html =>this._refs.displayArea.innerHTML = html )
            .then(() => { initializeComponents(this._refs.displayArea)
                window.dispatchEvent(new CustomEvent('pageupdated', {bubbles: true}))})
            .then(() => this._changePerspective())

    }

    _changePerspective() {
        const body = document.querySelector('body')
        const menuButton = document.querySelector('.menu-toggle')
        if (body.classList.contains('wrapper-menu-is-open')) {
            body.classList.toggle('wrapper-menu-is-open')
            menuButton.setAttribute('data-opened', 'false')
        } else {
            //do nothing
        }
        // const content = document.querySelector('.main-text')
        // content.style.animation = ".8s ease-in-out slideInFromRight both"

    }

}

export default Router
