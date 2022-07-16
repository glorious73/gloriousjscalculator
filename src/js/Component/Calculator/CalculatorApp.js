import Observable from "../../Service/Observable/Observable";

const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <div class="calculator-result" data-bind="result">0</div>
    <div class="calculator-pad">
        <!-- First row -->
        <button class="operator-button" data-operation="clear">AC</button>
        <button class="operator-button" data-operation="square">x<sup>2</sup></button>
        <button class="operator-button" data-operation="squareroot">√x</button>
        <button class="operator-button" data-operation="divide">÷</button>
        <!-- Second row -->
        <button class="operand-button">7</button>
        <button class="operand-button">8</button>
        <button class="operand-button">9</button>
        <button class="operator-button" data-operation="multiply">X</button>
        <!-- Third row -->
        <button class="operand-button">4</button>
        <button class="operand-button">5</button>
        <button class="operand-button">6</button>
        <button class="operator-button" data-operation="subtract">−</button>
        <!-- Fourth row -->
        <button class="operand-button">1</button>
        <button class="operand-button">2</button>
        <button class="operand-button">3</button>
        <button class="operator-button" data-operation="add">+</button>
        <!-- Fifth row -->
        <button class="operand-zero-button">0</button>
        <button class="operand-button" data-operation="decimal">•</button>
        <button class="operator-button" data-operation="calculate">=</button>
    </div>
`;

export default class CalculatorApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // application variable
        this.result           = new Observable(""); // string since operators will also be shown
        this.canUpdateDisplay = true;
        this.firstValue       = 0;
        this.secondValue      = 0;
        this.operator         = undefined;
        this.previousKeyType  = '';
    }

    connectedCallback() {
        console.log("Calculator app attached.");
        // Observables
        this.shadowRoot.querySelectorAll("[data-bind]").forEach(observable => this.createTwoWayBinding(observable));
        // Calculator events
        this.shadowRoot.querySelectorAll("button").forEach(calculatorKey => {
            calculatorKey.addEventListener("click", () => this.updateResult(calculatorKey));
        });
    }

    disconnectedCallback() {

    }

    createTwoWayBinding(observable) {
        const dataAttribute = observable.getAttribute("data-bind");
        this[dataAttribute].attach(() => {
            this.shadowRoot.querySelector(`[data-bind=${dataAttribute}]`).innerHTML = this[dataAttribute].value;
        });
    }

    updateResult(calculatorKey) {
        const operation = calculatorKey.dataset.operation;
        if(!operation) {
            this.previousKeyType = 'number';
            this.updateDisplay(`${this.result.value}${calculatorKey.innerText}`);
        }
        else {
            if(operation === 'decimal')
                this.updateDisplay(this.result.value += '.');
            else
                if(operation === 'calculate')
                    this.calculate();
                else if(operation === 'clear')
                    this.clear();
                else if(operation === 'square' || operation === 'squareroot')
                    this.calculateOneOperandOperation(calculatorKey, operation);
                else
                    this.setOperation(calculatorKey, operation);
        }
    }

    setOperation(calculatorKey, operation) {
        if(!this.operator) {
            this.previousKeyType = 'operator';
            this.operator = operation;
            this.updateDisplay(`${this.result.value} ${calculatorKey.innerText} `);
        }
    }

    calculateOneOperandOperation(calculatorKey, operation) {
        const canCalculate = (this.previousKeyType === 'number' && !this.operator);
        if(canCalculate) {
            // set calculator logic
            this.previousKeyType = 'operator';
            this.operator = operation;
            // get value
            const calculation = this.result.value;
            const calculationInputs = calculation.split(" ");
            this.firstValue = calculationInputs[0];
            switch(this.operator) {
                case 'square':
                    this.updateDisplay(`${this.result.value}<sup>2</sup> = ${Math.pow(this.firstValue, 2)}`);
                    break;
                case 'squareroot':
                    this.updateDisplay(`√${this.result.value} = ${Math.sqrt(this.firstValue)}`);
                    break;
                default:
                    this.clear();
            }
            this.canUpdateDisplay = false;
        }
    }

    calculate() {
        const canCalculate = (this.previousKeyType === 'number' && this.operator);
        if(canCalculate) {
            // 1. get values
            const calculation = this.result.value;
            const calculationInputs = calculation.split(" ");
            this.firstValue = calculationInputs[0];
            this.secondValue = calculationInputs[2];
            // 2. refine values
            if(this.firstValue.endsWith('.'))
                this.firstValue += '0';
            if(this.secondValue.endsWith('.'))
                this.secondValue += '0';
            // 3. do operation
            let result = '';
            const firstVal = parseFloat(this.firstValue);
            const secondVal = parseFloat(this.secondValue);
            if (this.operator === 'add')
                result = firstVal + secondVal;
            else if (this.operator === 'subtract')
                result = firstVal - secondVal;
            else if (this.operator === 'multiply')
                result = firstVal * secondVal;
            else if (this.operator === 'divide')
                result = firstVal / secondVal;
            // 4. update display
            this.updateDisplay(`${this.result.value} = ${result}`);
            this.canUpdateDisplay = false;
        }
    }

    updateDisplay(newDisplayValue) {
        if(this.canUpdateDisplay)
            this.result.value = newDisplayValue;
    }

    clear() {
        this.result.value     = '';
        this.firstValue       = 0;
        this.secondValue      = 0;
        this.operator         = undefined;
        this.previousKeyType  = '';
        this.canUpdateDisplay = true;
        this.shadowRoot.querySelector('[data-bind="result"]').innerHTML = '0';
    }
}

window.customElements.define('calculator-app', CalculatorApp);