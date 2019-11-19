/**
 * Some helpers
 * @object
 */
export const bust = url => {
    const join = url.indexOf('?') === -1 ? '?' : '&'
    return `${ url }${ join }v=${ Date.now() }`
}
export const path = url => url.replace(window.origin , '');

export const parseFromString = (string) => {
    const parser = new DOMParser();
    return parser.parseFromString(string, 'text/html');
};

export const getHTML = (url, container) => {
    return fetch(bust(url), {credentials: 'same-origin'})
        .then(response => response.text())
        .then(text => parseFromString(text).querySelector(container).innerHTML);
};
