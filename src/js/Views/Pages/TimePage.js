const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <h1>Time Calculator!</h1>
`;

export default class TimePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Time Page attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('time-page', TimePage);