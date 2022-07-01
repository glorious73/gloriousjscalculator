export default class App {
    constructor(selector) {
        this.appElement = document.querySelector(selector);
        this.components = {};
        this.saveCssFileNameToLocalStorage();
    }

    addComponent(component) {
        this.components[component.name] = component;
    }

    showComponent(name) {
        this.currentComponent = this.components[name];
        this.updateView();
    }

    updateView() {
        // TODO: Update this to do two things
        // 1. Change the content view
        // 2. Update the sidebar's active element
        if(this.currentComponent) {
            this.appElement.innerHTML = '';
            this.appElement.appendChild(document.createElement(this.currentComponent.name));
        }
    }

    saveCssFileNameToLocalStorage() {
        let cssFileName = document.querySelector("#csslink").href;
        cssFileName = cssFileName.substring(cssFileName.lastIndexOf('/')); 
        localStorage.setItem("cssFileName", cssFileName);
    }
}