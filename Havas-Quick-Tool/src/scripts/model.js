import { scriptsArr } from "./config";

let stringFilterKeyword = "";
let stringFilterCategory = "";
let actualTab = "sites";
let idOfScriptSelected;
let colorSelected = "";

// RETURN

const returnScriptInfo = function () {
  return scriptsArr;
};

// SETTERS

const setFilterKeyword = function (newStringKeword) {
  stringFilterKeyword = newStringKeword;
};

const setFilterCategory = function (newStringCategory) {
  stringFilterCategory = newStringCategory;
};

const setActualTab = function (tabSelected) {
  actualTab = tabSelected;
};

const setScriptSelected = function (scriptSelected) {
  if (!scriptSelected.target.closest(".extensionContainer__optionItem")) return;
  const scriptIdInDataSet = scriptSelected.target.closest(
    ".extensionContainer__optionItem"
  ).dataset.scriptId;
  idOfScriptSelected = scriptIdInDataSet;
};

const setColorPicked = function (colorPicked) {
  colorSelected = colorPicked;
};

// FILTERS

const filterScriptByTab = function (allScripts) {
  return allScripts.filter((scriptItem) => {
    return scriptItem.scope === actualTab;
  });
};

const filterScriptByInput = function (allScripts) {
  return allScripts.filter((scriptItem) => {
    return (
      scriptItem.title.toLowerCase().includes(stringFilterKeyword) ||
      scriptItem.description.toLowerCase().includes(stringFilterKeyword)
    );
  });
};

const filterScriptByCategory = function (allScripts) {
  if (stringFilterCategory === "") return allScripts;
  return allScripts.filter((scriptItem) => {
    return scriptItem.category === stringFilterCategory;
  });
};

// SORTER

const sortScriptsByAlphabet = function (allScripts) {
  return allScripts.sort((scriptItem1, scriptItem2) => {
    const title1 = scriptItem1.title.toUpperCase();
    const title2 = scriptItem2.title.toUpperCase();
    return title1 > title2 ? 1 : -1;
  });
};

// CHROME

const runChromeScript = async function () {
  if (!idOfScriptSelected) return;

  const arraySelected = scriptsArr.find((e) => {
    return e.id === idOfScriptSelected;
  });

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: arraySelected.script,
    args: [colorSelected],
  });
};

export {
  runChromeScript,
  returnScriptInfo,
  setFilterKeyword,
  setActualTab,
  filterScriptByTab,
  filterScriptByInput,
  setScriptSelected,
  setFilterCategory,
  filterScriptByCategory,
  sortScriptsByAlphabet,
  setColorPicked,
};
