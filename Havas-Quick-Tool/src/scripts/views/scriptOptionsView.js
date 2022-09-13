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
    if (elementsArr.length == 0) return this.loadNoResultsFound();

    const allHTMLContent = this.generateHTMLCode(elementsArr);
    this.loadAllScriptOptions(allHTMLContent);
  }

  loadAllScriptOptions(HTMLContent) {
    this._parentElement.innerHTML = "";
    HTMLContent.forEach((elItem) => {
      this._parentElement.appendChild(elItem);
    });
  }

  loadNoResultsFound() {
    this._parentElement.innerHTML = "";
    const htmlCode = `
      <div class="extensionContainer__optionsNoFound">
        <p class="extensionContainer__optionTitleNoFound">
          No options found
        </p>
      </div>
      `;
    this._parentElement.insertAdjacentHTML("beforeend", htmlCode);
  }

  handlerSelectedScript(callback) {
    this._parentElement.addEventListener("click", (e) => {
      callback(e);
    });
  }
}

const ScriptOptionsModule = new ScriptOptions();
export { ScriptOptionsModule };
