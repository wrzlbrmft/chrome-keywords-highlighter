function loadOptions() {
	if ("undefined" != typeof localStorage) {
		document.getElementById("textKeywords").value = localStorage.getItem("keywords");
	}
}

function saveOptions() {
	if ("undefined" != typeof localStorage) {
		localStorage.setItem("keywords", document.getElementById("textKeywords").value);
	}
}

document.addEventListener("DOMContentLoaded", function() {
	loadOptions();

	document.getElementById("buttonCancel").addEventListener("click", function() {
		window.close();
	});

	document.getElementById("buttonSave").addEventListener("click", function() {
		saveOptions();
		window.close();
	});
});
