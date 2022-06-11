// App & Router
import App from './app';
import Router from './Router/Router';
// Views
import MainView from './Views/MainView';

const app = new App("#app");
const router = new Router(app);

// Add Views
app.addComponent({
    name: 'main-view',
    view: MainView
});

// Add routes
router.addRoute('main-view', "^$");