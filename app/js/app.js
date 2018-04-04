import ViewApp from './ViewApp/ViewApp';
import appStore from './AppStore/AppStore';

const app = new ViewApp(appStore);

app.init();
