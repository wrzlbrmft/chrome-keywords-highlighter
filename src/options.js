function loadKeywords() {
	if ("undefined" != typeof localStorage) {
		document.getElementById("textKeywords").value = localStorage.getItem("keywords");
	}
}

function saveKeywords() {
	if ("undefined" != typeof localStorage) {
		localStorage.setItem("keywords", document.getElementById("textKeywords").value);
	}
}

document.addEventListener("DOMContentLoaded", function() {
	loadKeywords();

	document.getElementById("buttonReset").addEventListener("click", function() {
		loadKeywords();
	});

	document.getElementById("buttonSave").addEventListener("click", function() {
		saveKeywords();
	});
});
