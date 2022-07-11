const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <div class="calculator-result">0</div>
    <div class="calculator-pad">
        <!-- First row -->
        <button class="operator-button" data-action="clear">AC</button>
        <button class="operator-button" data-action="square">x^2</button>
        <button class="operator-button" data-action="squareroot">Root</button>
        <button class="operator-button" data-action="divide">÷</button>
        <!-- Second row -->
        <button class="operand-button">7</button>
        <button class="operand-button">8</button>
        <button class="operand-button">9</button>
        <button class="operator-button" data-action="multiply">X</button>
        <!-- Third row -->
        <button class="operand-button">4</button>
        <button class="operand-button">5</button>
        <button class="operand-button">6</button>
        <button class="operator-button" data-action="subtract">−</button>
        <!-- Fourth row -->
        <button class="operand-button">1</button>
        <button class="operand-button">2</button>
        <button class="operand-button">3</button>
        <button class="operator-button" data-action="add">+</button>
        <!-- Fifth row -->
        <button class="operand-zero-button">0</button>
        <button class="operand-button">•</button>
        <button class="operator-button" data-action="calculate">=</button>
    </div>
`;

export default class CalculatorApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Calculator app attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('calculator-app', CalculatorApp);