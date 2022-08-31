let stringFilterKeyword = "";
let actualTab = "sites";
let idOfScriptSelected;

let scriptsArr = [
  // Websites
  {
    id: 1,
    script: "",
    title: "Marcar links",
    description: "",
    category: "sites",
  },
  // Email
  {
    id: 2,
    script: "",
    title: "Marcar links",
    description: "",
    category: "emails",
  },
  {
    id: 3,
    script: "",
    title: "Marcar Bold",
    description: "",
    category: "emails",
  },
  {
    id: 4,
    script: "",
    title: "Marcar Italic",
    description: "",
    category: "emails",
  },
  // Banners
  {
    id: 5,
    script: "",
    title: "Centrar Banne",
    description: "",
    category: "banners",
  },
];

const setFilterKeyword = function (newStringKeword) {
  stringFilterKeyword = newStringKeword;
  // console.log(stringFilterKeyword);
};

const setActualTab = function (tabSelected) {
  actualTab = tabSelected;
  // console.log(tabSelected);
};

const setScriptSelected = function (scriptSelected) {
  if (!scriptSelected.target.closest(".extensionContainer__optionItem")) return;
  const scriptIdInDataSet = scriptSelected.target.closest(
    ".extensionContainer__optionItem"
  ).dataset.scriptId;
  console.log(scriptIdInDataSet);
  idOfScriptSelected = scriptIdInDataSet;
};

const returnScriptInfo = function () {
  return scriptsArr;
};

const filterScriptByTab = function (allScripts) {
  return allScripts.filter((scriptItem) => {
    return scriptItem.category === actualTab;
  });
};

const filterScriptByInput = function (allScripts) {
  return allScripts.filter((scriptItem) => {
    // console.log(scriptItem);
    // console.log(stringFilterKeyword);
    // console.log();
    return (
      scriptItem.title.toLowerCase().includes(stringFilterKeyword) ||
      scriptItem.description.toLowerCase().includes(stringFilterKeyword)
    );
  });
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

export {
  runChromeScript,
  returnScriptInfo,
  setFilterKeyword,
  setActualTab,
  filterScriptByTab,
  filterScriptByInput,
  setScriptSelected,
};
