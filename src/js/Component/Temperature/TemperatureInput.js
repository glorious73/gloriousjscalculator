const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <h2><b>Enter Temperature</b></h2>
    <label for="inputtemp">Degree</label>
    <input type="number" name="inputtemp" />
    <label for="outputunit">Convert in</label>
    <select name="outputunit">
        <option value="C">Celsius</option>
        <option value="F">Fahrenhiet</option>
        <option value="K">Kelvin</option>
    </select>
`;

export default class TemperatureInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Temperature input attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('temperature-input', TemperatureInput);