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

	document.getElementById("buttonReset").addEventListener("click", function() {
		loadOptions();
	});

	document.getElementById("buttonSave").addEventListener("click", function() {
		saveOptions();
	});
});
