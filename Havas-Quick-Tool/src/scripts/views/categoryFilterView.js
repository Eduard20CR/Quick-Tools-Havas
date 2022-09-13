class CategoryFilter {
  _parentElement = document.querySelector(
    ".extensionContainer__inputContainer"
  );

  constructor() {}

  changeBtnColor(event) {}

  handlerCategoryFilter(callback) {
    this._parentElement
      .querySelector(".extensionContainer__category")
      .addEventListener("input", (e) => {
        callback(e);
      });
  }
}

const CategoryFilterModule = new CategoryFilter();
export { CategoryFilterModule };
