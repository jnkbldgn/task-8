class Dispatcher {
  constructor() {
    this.callbacks = [];
  }
  register(action, callback) {
    this.callbacks.push({ action, callback });
    console.log(`Dispatcher зарегистрировал событие ${action}`);
  }
  dispatch(action, ...args) {
    const filterCallbacks = this.callbacks.filter(item => action === item.action);
    filterCallbacks.forEach((item) => {
      console.log(`Dispatcher выполнил событие ${action}`);
      item.callback.apply(item.callback, args);
    });
  }
}

export default Dispatcher;

