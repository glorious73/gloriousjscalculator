const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <h1>Scientific Calculator!</h1>
`;

export default class ScientificCalculatorPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Scientific Calculator Page attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('scientificcalculator-page', ScientificCalculatorPage);