class colorPicker {
  _parentElement = document.querySelector(
    ".extensionContainer__inputContainer"
  );

  constructor() {}

  handlercolorPicker(callback) {
    this._parentElement
      .querySelector(".extensionContainer__colorPicker")
      .addEventListener("input", (e) => {
        callback(e);
      });
  }
}

const colorPickerModule = new colorPicker();
export { colorPickerModule };
