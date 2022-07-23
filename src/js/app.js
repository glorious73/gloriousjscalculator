export default class App {
    constructor(selector) {
        this.appElement = document.querySelector(selector);
        this.components = {};
        this.saveCssFileNameToLocalStorage();
    }

    instantiateApp() {
        this.currentComponent = this.components['main-view'];
        this.appElement.appendChild(document.createElement(this.currentComponent.name));
    }

    addComponent(component) {
        this.components[component.name] = component;
    }

    showComponent(route) {
        this.currentComponent = this.components[route.name];
        this.updateView(route);
    }

    updateView(route) {
        const contentView = document.querySelector('main-view').shadowRoot.querySelector('content-view');
        if(this.currentComponent) {
            contentView.shadowRoot.innerHTML = "";
            const newElement = document.createElement(`${this.currentComponent.name}`);
            contentView.shadowRoot.appendChild(newElement);
        }
    }

    saveCssFileNameToLocalStorage() {
        let cssFileName = document.querySelector("#csslink").href;
        cssFileName = cssFileName.substring(cssFileName.lastIndexOf('/')); 
        localStorage.setItem("cssFileName", cssFileName);
    }
}