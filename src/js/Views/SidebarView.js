const template = document.createElement('template');

template.innerHTML = /*html*/`
    <h1>Glorious Calculator<h1>
    <!--TODO: Different calculator types-->
`;

export default class SidebarView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Sidebar view attached.");
    }

    disconnectedCallback() {

    }
}

window.customElements.define('sidebar-view', SidebarView);