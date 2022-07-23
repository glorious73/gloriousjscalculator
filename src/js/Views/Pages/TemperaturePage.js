import TemperatureInput from "../../Component/Temperature/TemperatureInput";
import TemperatureResult from "../../Component/Temperature/TemperatureResult";

const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <div class="temperature-page">
        <temperature-input></temperature-input>
        <temperature-result></temperature-result>
    </div>
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