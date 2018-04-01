import Emiter from '../Emiter/Emiter';

class Store extends Emiter {
  constructor() {
    super();
    this.data = {};
  }
  has(key) {
    return Object.prototype.hasOwnProperty.call(this.data, key);
  }
  get(key) {
    return this.data[key];
  }
  set(key, value) {
    const changeset = {};
    this.data[key] = value;
    changeset[key] = value;
    this.emit('change', changeset);
  }
}

export default Store;
