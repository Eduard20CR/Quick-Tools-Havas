import * as model from "./model";
import { navModule } from "./views/nav";
import { BtnSubmitModule } from "./views/btnSubmit";
import { ScriptOptionsModule } from "./views/scriptOptions";

const onSwitchTab = function (event) {
  BtnSubmitModule.changeBtnColor(event);
};

const onSubmitFunctionality = function (event) {
  model.runChromeScript();
};

const onScriptSelected = function (event) {
  console.log("hello");
  // console.log(event.target.closest(".extensionContainer__optionItem"));
};

const loadInfo = function () {
  const scripts = model.returnScriptInfo();

  ScriptOptionsModule.generateOptions(scripts);
};

(function () {
  loadInfo();

  navModule.loadTabOnInit();
  navModule.handlerSwitchTab(onSwitchTab);
  ScriptOptionsModule.handlerSelectedScript(onScriptSelected);
  BtnSubmitModule.handlerSubmitScript(onSubmitFunctionality);
})();
