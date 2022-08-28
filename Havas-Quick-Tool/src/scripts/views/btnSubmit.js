class BtnSubmit {
  _parentElement = document.querySelector(".extensionContainer__btnSubmit");

  constructor() {}

  changeBtnColor(event) {
    const newClassToAdd = `extensionContainer__btnSubmit${event.target.classList[1].slice(
      -3
    )}`;
    console.log(newClassToAdd);

    for (let i = 1; i <= 3; i++) {
      if (
        this._parentElement.classList.contains(
          `extensionContainer__btnSubmit--${i}`
        )
      )
        this._parentElement.classList.remove(
          `extensionContainer__btnSubmit--${i}`
        );
    }
    this._parentElement.classList.add(newClassToAdd);
  }

  handlerSubmitScript(callback) {
    this._parentElement.addEventListener("click", () => {
      callback();
    });
  }
}

const BtnSubmitModule = new BtnSubmit();
export { BtnSubmitModule };
