import Emitter from '../Emitter/Emitter';

class Store extends Emitter {
  constructor() {
    super();
    this.data = {};
  }
  getState(key) {
    return this.data[key];
  }
  mutate() {
    console.error('Метод mutate не реализован.');
  }
}

export default Store;
