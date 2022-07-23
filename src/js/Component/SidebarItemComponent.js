const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <a>
        <slot name="icon"></slot>    
    </a>
`;

export default class SidebarItemComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // set href
        const anchor = this.shadowRoot.querySelector("a");
        anchor.href = this.getAttribute("data-href");
        // listen to click
        this.addEventListener('click', evt => this.triggerHashChange(evt));
    }

    disconnectedCallback() {

    }

    triggerHashChange(evt) {
        const anchor = this.shadowRoot.querySelector('a');
        window.location = anchor.href;
        document.dispatchEvent(new CustomEvent('anchorActiveEvent'));
    }
}

window.customElements.define('sidebaritem-component', SidebarItemComponent);