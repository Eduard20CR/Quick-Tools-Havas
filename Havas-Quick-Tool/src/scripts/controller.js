import { runChromeScript } from "./model";
import { navModule } from "./views/nav";
import { BtnSubmitModule } from "./views/btnSubmit";

const onSwitchTab = function (event) {
  BtnSubmitModule.changeBtnColor(event);
};

const onSubmitFunctionality = async function (event) {
  runChromeScript();
};

(function () {
  navModule.loadTabOnInit();
  navModule.handlerSwitchTab(onSwitchTab);
  BtnSubmitModule.handlerSubmitScript(onSubmitFunctionality);
})();
