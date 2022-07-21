const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <h1>Curency Exchange!</h1>
`;

export default class CurrencyExchangePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Cuurency Exchange Page attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('currency-page', CurrencyExchangePage);