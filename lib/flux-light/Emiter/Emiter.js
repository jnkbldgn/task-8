
class Emiter {
  constructor() {
    this.listeners = [];
  }
  // подписка на событие
  on(type, callback, contex) {
    this.listeners.push({ type, callback, contex });
    console.log('Подписка на обновление Store');
  }
  // выполнение события
  emit(type, ...args) {
    this.getListeners(type)
      .forEach((item) => {
        console.log('Обновление Store');
        item.callback.apply(item.contex || item.callback, args);
      });
  }
  // получить событие по типу
  getListeners(type) {
    return this.listeners.filter(item => item.type === type);
  }
}

export default Emiter;
