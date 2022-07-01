const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <div>
        <h1>Content is here!</h1>
    </div>
`;

export default class ContentView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Content view attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('content-view', ContentView);