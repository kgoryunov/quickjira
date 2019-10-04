const MENU_ITEM_ID = 'quickJira';

chrome.runtime.onInstalled.addListener(onInstalled);
chrome.contextMenus.onClicked.addListener(handleContextMenuClick);

function onInstalled(details) {
  if (details.reason === 'install') {
    chrome.runtime.openOptionsPage();
  }

  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    title: 'Quick JIRA',
    contexts: ['selection'],
  });
}

function handleContextMenuClick(selection) {
  chrome.storage.sync.get('jiraUrl', options => {
    if (!options.jiraUrl) {
      chrome.runtime.openOptionsPage();
    } else {
      chrome.tabs.create({
        url: options.jiraUrl + encodeURIComponent(selection.selectionText.trim()),
      });
    }
  });
}
