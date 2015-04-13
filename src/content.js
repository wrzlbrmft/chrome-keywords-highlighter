function keywordsHighlighter(options) {
	document.body.style.backgroundColor = options.keywords;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ("returnOptions" == request.message) {
		if ("undefined" != typeof request.keywords && request.keywords) {
			keywordsHighlighter({
				"keywords": request.keywords
			});
		}
	}
});

chrome.runtime.sendMessage({
	"message": "getOptions"
});
