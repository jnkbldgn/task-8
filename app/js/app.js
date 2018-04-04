import ViewApp from './ViewApp/ViewApp';
import appStore from './appStore/AppStore';

const app = new ViewApp(appStore);

app.init();
