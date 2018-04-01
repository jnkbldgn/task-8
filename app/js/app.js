import ViewApp from './ViewApp/ViewApp';
import AppLogs from './modelsApp/AppLogs';
import AppResponse from './modelsApp/AppResponse';

const app = new ViewApp(AppResponse, AppLogs);

app.init();
