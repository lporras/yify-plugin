// Add manifest access to the extension
chrome.manifest = chrome.app.getDetails();

chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.create({url: 'chrome-extension://' + chrome.i18n.getMessage("@@extension_id") + '/movieListApp.html'});

});