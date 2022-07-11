import CalculatorApp from "../../Component/Calculator/CalculatorApp";

const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <calculator-app></calculator-app>
`;

export default class CalculatorPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Calculator Page attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('calculator-page', CalculatorPage);