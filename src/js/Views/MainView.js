import SidebarView from "./SidebarView";
import ContentView from "./ContentView";

const template = document.createElement('template');

template.innerHTML = /*html*/`
    <link rel="stylesheet" href="${localStorage.getItem("cssFileName")}">
    <div class="body-container">
        <sidebar-view class="sidebar"></sidebar-view>
        <content-view class="content"></content-view>
    </div>
`;

export default class MainView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log(`Main view attached.`);
    }

    disconnectedCallback() {

    }
}

window.customElements.define('main-view', MainView);