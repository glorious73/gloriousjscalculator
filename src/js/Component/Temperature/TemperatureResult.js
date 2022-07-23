const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <div>
        <h3>Temperature Result here.</h3>
    </div>
`;

export default class TemperatureResult extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Temperature result attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('temperature-result', TemperatureResult);