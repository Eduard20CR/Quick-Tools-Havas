let stringFilterKeyword = "";
let actualTab = "sites";

const setFilterKeyword = function (newStringKeword) {
  stringFilterKeyword = newStringKeword;
  // console.log(stringFilterKeyword);
};

const setActualTab = function (tabSelected) {
  actualTab = tabSelected;
  // console.log(tabSelected);
};

const returnScriptInfo = function () {
  return ["", ""];
};

const runChromeScript = async function () {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      console.log("hello");
    },
  });
};

export { runChromeScript, returnScriptInfo, setFilterKeyword, setActualTab };
