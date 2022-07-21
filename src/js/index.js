// App & Router
import App from './app';
import Router from './Router/Router';
// Views
import MainView from './Views/MainView';
import SidebarView from './Views/SidebarView';
// Pages
import CalculatorPage from './Views/Pages/CalculatorPage';
import ContentView from './Views/ContentView';
import ScientificCalculatorPage from './Views/Pages/ScientificCalculatorPage';
import CurrencyExchangePage from './Views/Pages/CurrencyExchangePage';
import TemperaturePage from './Views/Pages/TemperaturePage';
import DatePage from './Views/Pages/DatePage';
import TimePage from './Views/Pages/TimePage';


const app = new App("#app");
const router = new Router(app);

// Add Views
app.addComponent({
    name: 'main-view',
    view: MainView
});

app.addComponent({
    name: 'content-view',
    view: ContentView
});

app.addComponent({
    name: 'sidebar-view',
    view: SidebarView
});

// Add Pages
app.addComponent({
    name: 'calculator-page',
    view: CalculatorPage
});
app.addComponent({
    name: 'scientificcalculator-page',
    view: ScientificCalculatorPage
});
app.addComponent({
    name: 'currency-page',
    view: CurrencyExchangePage
});
app.addComponent({
    name: 'temperature-page',
    view: TemperaturePage
});
app.addComponent({
    name: 'date-page',
    view: DatePage
});
app.addComponent({
    name: 'time-page',
    view: TimePage
});

// Add routes
router.addRoute('main-view', "^$");
router.addRoute('main-view', "^#/$");
router.addRoute('calculator-page', "^#/calculator$");
router.addRoute('scientificcalculator-page', "^#/scientificcalculator$");
router.addRoute('currency-page', "^#/currencyexchange$");
router.addRoute('temperature-page', "^#/temperaturecalculator$");
router.addRoute('date-page', "^#/datecalculator$");
router.addRoute('time-page', "^#/timecalculator$");