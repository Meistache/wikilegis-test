// JavaScript Document
function change_text() {
	var button = document.getElementById('toggle_button');

	if (button.innerHTML === "&#9654") {
 		button.innerHTML = "&#9660";
	 }
	else {
		button.innerHTML = "&#9654";
	}
}
