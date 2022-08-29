class ScriptOptions {
  _parentElement = document.querySelector(
    ".extensionContainer__optionsContainer"
  );

  constructor() {}

  generateHTMLCode(elementsData) {
    const htmlCode = elementsData
      .map(() => {
        return `
        <div class="extensionContainer__optionItem">
              <p class="extensionContainer__optionTitle">Lorem, ipsum dolor.</p>
        </div>
       `;
      })
      .join("");
    return htmlCode;
  }

  generateOptions(elementsArr) {
    const allHTMLContent = this.generateHTMLCode(elementsArr);
    this.loadAllScriptOptions(allHTMLContent);
  }

  loadAllScriptOptions(HTMLContent) {
    this._parentElement.innerHTML = HTMLContent;
  }

  handlerSelectedScript(callback) {
    this._parentElement.addEventListener("click", (e) => {
      callback(e);
    });
  }
}

const ScriptOptionsModule = new ScriptOptions();
export { ScriptOptionsModule };
