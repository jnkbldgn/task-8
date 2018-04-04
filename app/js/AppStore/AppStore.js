import { Store } from '../../../lib/flux-light/flux-light';
import sendToServer from '../api/index';

class AppStore extends Store {
  constructor() {
    super();
  }
  mutate(key, value) {
    const changeset = {};
    this.data[key] = value;
    changeset[key] = value;
    this.emit('change', changeset);
  }
  sendData(data) {
    sendToServer(data)
      .then(response => console.log(`Данные успешно отправлены: ${response}`))
      .catch(error => console.error(`Произошла ошибка: ${error}`));
  }
}

export default new AppStore();
