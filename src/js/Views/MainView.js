const template = document.createElement('template');

template.innerHTML = /*html*/`
    <div style="width:50vw; border:red solid 2px; padding:30px;">
        <h1>Hello World!</h1>
    </div>
`;

export default class MainView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Main view attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('main-view', MainView);