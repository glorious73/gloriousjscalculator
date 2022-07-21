export default class Router {
    constructor(app) {
        this.app    = app;
        this.routes = [];
        this.hashChange = this.hashChange.bind(this);
        this.DOMContentLoaded = this.DOMContentLoaded.bind(this);
        window.addEventListener("hashchange", this.hashChange);
        window.addEventListener("DOMContentLoaded", this.DOMContentLoaded);
    }

    addRoute(name, path) {
        this.routes.push({
            name,
            path
        });
    }

    DOMContentLoaded() {
        this.app.instantiateApp();
    }

    hashChange() {
        const { hash } = window.location;
        const route = this.routes.find(route => {
            return hash.match(new RegExp(route.path));
        });
        if(route) {
            // show component
            this.app.showComponent(route);
            document.body.scrollTop = 0; // Safari
            document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
        }
    }
}