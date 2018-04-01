import sendToServer from '../api/index';

class ViewApp {
  constructor(AppResponse, AppLogs) {
    this.applyButton = document.querySelector('.view-stub__apply');
    this.input = document.querySelector('.view-stub__input');
    this.label = document.querySelector('.view-stub__label');
    this.logs = document.querySelector('.log');
    this.responseModel = AppResponse;
    this.logsModel = AppLogs;
  }
  init() {
    this.applyButton.addEventListener('click', this.sendData.bind(this));
    this.responseModel.on('change', this.updateResponse, this);
    this.logsModel.on('change', this.updateLogs, this);
  }
  sendData() {
    sendToServer(this.input.value)
      .then(data => console.log(`Данные успешно отправлены: ${data}`))
      .catch(error => console.error(`Произошла ошибка: ${error}`));
  }
  updateLogs() {
    const data = this.logsModel.get('log');
    const element = document.createElement('p');
    element.innerHTML = data;
    this.logs.appendChild(element);
  }
  updateResponse() {
    const data = this.responseModel.get('response');
    this.label.innerHTML = `Сервер получил: ${data}`;
  }
}

export default ViewApp;
