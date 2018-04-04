import { Dispatcher } from '../../../lib/flux-light/flux-light';
import appStore from '../AppStore/AppStore';

const dispatcherApp = new Dispatcher();

dispatcherApp.register('start-send', () => {
  appStore.mutate('log', 'Начало отправки данных.');
});
dispatcherApp.register('success-send', () => {
  appStore.mutate('log', 'Успешная отправка данных.');
});
dispatcherApp.register('save-send', () => {
  appStore.mutate('log', 'Данные от сервера сохранены.');
});
dispatcherApp.register('save-response', (data) => {
  appStore.mutate('response', data);
});

export default dispatcherApp;

