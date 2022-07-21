const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <h1>Date Calculator!</h1>
`;

export default class DatePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Date Page attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('date-page', DatePage);