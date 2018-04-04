class ViewApp {
  constructor(appStore) {
    this.applyButton = document.querySelector('.view-stub__apply');
    this.input = document.querySelector('.view-stub__input');
    this.label = document.querySelector('.view-stub__label');
    this.logs = document.querySelector('.log');
    this.logData = '';
    this.responseData = '';
    this.appStore = appStore;
  }
  init() {
    this.applyButton.addEventListener('click', this.sendData.bind(this));
    this.appStore.on('change', () => this.updateView());
  }
  sendData() {
    this.appStore.sendData(this.input.value);
  }
  updateView() {
    const response = this.appStore.getState('response');
    const log = this.appStore.getState('log');
    const element = document.createElement('p');
    if (log && this.logData !== log) {
      this.logData = log;
      element.innerHTML = this.logData;
      this.logs.appendChild(element);
    }
    if (response && this.responseData !== response) {
      this.responseData = response;
      this.label.innerHTML = `Сервер получил: ${this.responseData}`;
    }
  }
}

export default ViewApp;
