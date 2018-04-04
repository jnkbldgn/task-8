
class Emitter {
  constructor() {
    this.listeners = [];
  }
  // подписка на событие
  on(type, callback) {
    this.listeners.push({ type, callback });
    console.log('Подписка на обновление Store');
  }
  // выполнение события
  emit(type, ...args) {
    this.listeners
      .filter(item => item.type === type)
      .forEach((item) => {
        console.log('Обновление Store');
        item.callback(args);
      });
  }
}

export default Emitter;
