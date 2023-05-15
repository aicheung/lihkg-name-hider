chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'lihkg.com' },
            })],
            actions: [new chrome.scripting.executeScript({
                files: ['contentScript.js']
            })],
        }]);
    });
});
