const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <div class="d-flex flex-row justify-content-center align-items-center">
        <h6 class="footer-text">&copy; <span id="thisYear"></span> <a class="footer-link" href="https://www.github.com/glorious73" target="_blank">glorious73</a>.</h6>
    </div>
`;

export default class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Get the current year and append in copyright section
        this.shadowRoot.querySelector("#thisYear").innerText = new Date().getFullYear();
    }

    disconnectedCallback() {

    }
}

window.customElements.define('footer-component', FooterComponent);