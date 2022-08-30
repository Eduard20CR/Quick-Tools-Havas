class InputFilter {
  _parentElement = document.querySelector(
    ".extensionContainer__inputContainer"
  );

  constructor() {}

  changeBtnColor(event) {}

  handlerInputFilter(callback) {
    this._parentElement
      .querySelector(".extensionContainer__filter")
      .addEventListener("input", (e) => {
        callback(e);
      });
  }
}

const InputFilterModule = new InputFilter();
export { InputFilterModule };
