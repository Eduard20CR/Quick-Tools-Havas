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

      const childDescription = document.createElement("SPAN");
      childDescription.textContent = "i";
      childDescription.classList = "extensionContainer__descriptionIcon";

      const htmlDescription = `
      <div class="extensionContainer__popUpDescription">
      <p class="extensionContainer__popUpTitle">Description</p>
      <p class="extensionContainer__popUpBody">
        ${el.description}
      </p>
      <p class="extensionContainer__popUpCategory">
        ${el.category}
      </p>
    </div>
    `;

      childDescription.insertAdjacentHTML("beforeend", htmlDescription);

      parenteDiv.appendChild(childParagraph);
      parenteDiv.appendChild(childDescription);

      const htmlSVG = `<svg class="extensionContainer__favoriteIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>`;
      parenteDiv.insertAdjacentHTML("beforeend", htmlSVG);

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
