const runChromeScript = async function () {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      console.log("hello");
    },
  });
};

export { runChromeScript };
