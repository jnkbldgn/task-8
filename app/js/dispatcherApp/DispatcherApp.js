import { Dispatcher } from '../../../lib/flux-light/flux-light';
import AppResponse from '../modelsApp/AppResponse';
import AppLogs from '../modelsApp/AppLogs';

const dispatcherApp = new Dispatcher();

dispatcherApp.register('start-send', () => {
  AppLogs.set('log', 'Начало отправки данных.');
});
dispatcherApp.register('success-send', () => {
  AppLogs.set('log', 'Успешная отправка данных.');
});
dispatcherApp.register('save-send', () => {
  AppLogs.set('log', 'Данные от сервера сохранены.');
});
dispatcherApp.register('fail-send', () => {
  AppLogs.set('log', 'Произошла ошибка во время отправки данных.');
});
dispatcherApp.register('save-response', (data) => {
  AppResponse.set('response', data);
});

export default dispatcherApp;

