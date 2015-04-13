function keywordsHighlighter(options) {
	// Based on "highlight: JavaScript text higlighting jQuery plugin" by Johann Burkard.
	// http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
	// MIT license.
	function highlight(node, pos, keyword) {
		var span = document.createElement("span");
		span.className = "highlighted";

		var highlighted = node.splitText(pos);
		/*var afterHighlighted = */highlighted.splitText(keyword.length);
		var highlightedClone = highlighted.cloneNode(true);

		span.appendChild(highlightedClone);
		highlighted.parentNode.replaceChild(span, highlighted);
	}

	function addHighlights(node, keywords) {
		var skip = 0;

		if (3 == node.nodeType) {
			for (var i = 0; i < keywords.length; i++) {
				var keyword = keywords[i].toLowerCase();
				var pos = node.data.toLowerCase().indexOf(keyword);
				if (0 <= pos) {
					highlight(node, pos, keyword);
					skip = 1;
				}
			}
		}
		else if (1 == node.nodeType && !/(script|style)/i.test(node.tagName) && node.childNodes) {
			for (var j = 0; j < node.childNodes.length; j++) {
				j += addHighlights(node.childNodes[j], keywords);
			}
		}

		return skip;
	}

	var keywords = options.keywords.split(",");
	addHighlights(document.body, keywords);
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
