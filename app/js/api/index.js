import dispatcherApp from '../dispatcherApp/DispatcherApp';

function sendToServer(data) {
  return new Promise((resolve) => {
    dispatcherApp.dispatch('start-send');
    dispatcherApp.dispatch('success-send');
    dispatcherApp.dispatch('save-send');
    dispatcherApp.dispatch('save-response', data);
    resolve(data);
  });
}

export default sendToServer;

