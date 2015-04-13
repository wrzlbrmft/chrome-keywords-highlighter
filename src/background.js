chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ("getKeywords" == request.message) {
		if ("undefined" != typeof localStorage) {
			chrome.tabs.query({
					"active": true,
					"currentWindow": true
				},
				function(tabs) {
					if ("undefined" != typeof tabs[0].id && tabs[0].id) {
						chrome.tabs.sendMessage(tabs[0].id, {
							"message": "returnKeywords",
							"keywords": localStorage.getItem("keywords")
						});
					}
				}
			);
		}
	}
});