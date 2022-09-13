import * as model from "./model";
import { navModule } from "./views/navView";
import { BtnSubmitModule } from "./views/btnSubmitView";
import { ScriptOptionsModule } from "./views/scriptOptionsView";
import { InputFilterModule } from "./views/inputFilterView";
import { CategoryFilterModule } from "./views/categoryFilterView";

const onSwitchTab = function (event) {
  BtnSubmitModule.changeBtnColor(event);
  model.setActualTab(event.target.dataset.tab);
  loadInfo();
};

const onScriptSelected = function (event) {
  // console.log(event.target.closest(".extensionContainer__optionItem"));
  model.setScriptSelected(event);
};

const loadInfo = function () {
  const allScripts = model.returnScriptInfo();

  const ScriptsFilteredByTab = model.filterScriptByTab(allScripts);

  const ScriptsFilteredInput = model.filterScriptByInput(ScriptsFilteredByTab);

  const ScriptsFilteredCategory =
    model.filterScriptByCategory(ScriptsFilteredInput);

  const ScriptsSortedByAlphabet = model.sortScriptsByAlphabet(
    ScriptsFilteredCategory
  );

  ScriptOptionsModule.generateOptions(ScriptsSortedByAlphabet);
};

const inputFilterUpdated = function (event) {
  model.setFilterKeyword(event.target.value);
  loadInfo();
};

const categoryFilterUpdated = function (event) {
  model.setFilterCategory(event.target.value);
  loadInfo();
};

const onSubmitFunctionality = function (event) {
  model.runChromeScript();
};

(function () {
  loadInfo();

  navModule.loadTabOnInit();

  InputFilterModule.handlerInputFilter(inputFilterUpdated);
  navModule.handlerSwitchTab(onSwitchTab);
  ScriptOptionsModule.handlerSelectedScript(onScriptSelected);
  BtnSubmitModule.handlerSubmitScript(onSubmitFunctionality);
  CategoryFilterModule.handlerCategoryFilter(categoryFilterUpdated);
})();
