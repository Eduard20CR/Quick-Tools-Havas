import { model } from "./model";
import { navModule } from "./views/nav";
import { BtnSubmitModule } from "./views/btnSubmit";

const onSwitchTab = function (event) {
  BtnSubmitModule.changeBtnColor(event);
};

const onSubmitFunctionality = function (event) {
  console.log("hello");
};

(function () {
  navModule.loadTabOnInit();
  navModule.handlerSwitchTab(onSwitchTab);
  BtnSubmitModule.handlerSubmitScript(onSubmitFunctionality);
})();
