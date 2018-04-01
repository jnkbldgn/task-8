import dispatcherApp from '../dispatcherApp/DispatcherApp';

function sendToServer(data) {
  return new Promise((resolve, reject) => {
    dispatcherApp.dispatch('start-send')
      .then(() => {
        dispatcherApp.dispatch('success-send')
          .then(() => {
            dispatcherApp.dispatch('save-send')
              .then(() => {
                dispatcherApp.dispatch('save-response', data)
                  .then(() => {
                    resolve(data);
                  });
              });
          });
      })
      .catch((err) => {
        dispatcherApp.dispatch('fail-send')
          .then(() => {
            reject(err);
          });
      });
  });
}

export default sendToServer;

