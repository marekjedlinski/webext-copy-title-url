const REQUEST_TITLE = 'copy-title-url-to-clipboard';
const REQUEST_SELECTION = 'copy-selection-url-to-clipboard';

/* This extension creates two context menu items: one for the default case,
    and one to use when some text is selected on a web page. Only one of the
    two items is shown at a time, otherwise Firefox puts them in a submenu,
    which requires additional clicks to navigate.
*/

// support Firefox and Chrome
if (!browser) {
  var browser = chrome;
}

browser.contextMenus.create({
    id: REQUEST_TITLE,
    title: "Copy Page Title and Url",
    contexts: ["page"],
    onclick: handleCopyRequest
});
browser.contextMenus.create({
    id: REQUEST_SELECTION,
    title: "Copy Selection and Url",
    contexts: ["selection"],
    onclick: handleCopyRequest
});

function handleCopyRequest(info, tab) {
    // check in which context the command was clicked
    const useSelection = info.menuItemId === REQUEST_SELECTION;
    chrome.tabs.sendMessage(tab.id,
        {tabUrl: tab.url,
         tabTitle: tab.title,
         useSelection: useSelection
    });
}

