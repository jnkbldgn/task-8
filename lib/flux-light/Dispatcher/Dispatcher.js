class Dispatcher {
  constructor() {
    this.callbacks = [];
  }
  register(action, callback) {
    this.callbacks.push({ action, callback });
    console.log(`Dispatcher зарегистрировал событие ${action}`);
  }
  dispatch(action, ...args) {
    return new Promise((resolve) => {
      this.getCallback(action).forEach(item => item.apply(item, args));
      console.log(`Dispatcher выполнил событие ${action}`);
      resolve();
    });
  }
  getCallback(action) {
    return this.callbacks
      .filter(item => action === item.action)
      .map(value => value.callback);
  }
}

export default Dispatcher;

