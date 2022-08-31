class ScriptOptions {
  _parentElement = document.querySelector(
    ".extensionContainer__optionsContainer"
  );

  constructor() {}

  generateHTMLCode(elementsData) {
    const htmlCode = elementsData.map((el) => {
      const parenteDiv = document.createElement("DIV");
      parenteDiv.dataset.scriptId = el.id;
      parenteDiv.classList.add("extensionContainer__optionItem");

      const childParagraph = document.createElement("P");
      childParagraph.textContent = el.title;
      childParagraph.classList = "extensionContainer__optionTitle";

      parenteDiv.appendChild(childParagraph);
      return parenteDiv;
    });
    return htmlCode;
  }

  generateOptions(elementsArr) {
    const allHTMLContent = this.generateHTMLCode(elementsArr);
    this.loadAllScriptOptions(allHTMLContent);
  }

  loadAllScriptOptions(HTMLContent) {
    this._parentElement.innerHTML = "";
    HTMLContent.forEach((elItem) => {
      this._parentElement.appendChild(elItem);
    });
  }

  handlerSelectedScript(callback) {
    this._parentElement.addEventListener("click", (e) => {
      callback(e);
    });
  }
}

const ScriptOptionsModule = new ScriptOptions();
export { ScriptOptionsModule };
