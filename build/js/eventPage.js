chrome.runtime.onMessage.addListener(function(e,o){e.readyToCount&&o&&o.tab&&o.tab.id&&chrome.pageAction.show(o.tab.id)});