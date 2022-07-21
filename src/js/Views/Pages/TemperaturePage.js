const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <h1>Temperature Calculator!</h1>
`;

export default class TemperaturePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Temperature Page attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('temperature-page', TemperaturePage);