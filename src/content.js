chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ("returnKeywords" == request.message) {
		if ("undefined" != typeof request.keywords && request.keywords) {
			document.body.style.backgroundColor = request.keywords;
		}
	}
});

chrome.runtime.sendMessage({
	"message": "getKeywords"
});
