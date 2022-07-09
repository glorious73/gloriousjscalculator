import FooterComponent from "../Component/FooterComponent";

const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <h1 class="sidebar-header">Glorious Calculator</h1>
    <section class="sidebar-menu">
        <a class="sidebar-item hyperlink active">C1</a>
        <a class="sidebar-item hyperlink">C2</a>
        <a class="sidebar-item hyperlink">C3</a>
        <a class="sidebar-item hyperlink">C4</a>
        <a class="sidebar-item hyperlink">C5</a>
        <a class="sidebar-item hyperlink">C6</a>
    </section>
    <footer-component class="footer"></footer-component>
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