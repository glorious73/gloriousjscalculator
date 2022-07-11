const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <div>
        <h3>Calculator Recents</h3>
    </div>
`;

export default class CalculatorRecents extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Calculator recents attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('calculator-recents', CalculatorRecents);