function loadOptions() {
	if ("undefined" != typeof localStorage) {
		document.getElementById("textKeywords").value = localStorage.getItem("keywords");
		document.getElementById("colorColor").value = localStorage.getItem("color") || "#000000";
		document.getElementById("colorBackgroundColor").value = localStorage.getItem("backgroundColor") || "#ffff00";
	}
}

function saveOptions() {
	if ("undefined" != typeof localStorage) {
		localStorage.setItem("keywords", document.getElementById("textKeywords").value);
		localStorage.setItem("color", document.getElementById("colorColor").value);
		localStorage.setItem("backgroundColor", document.getElementById("colorBackgroundColor").value);
	}
}
