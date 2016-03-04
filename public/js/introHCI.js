'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	initializeCamera();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$("account_btn").click(projectClick);
}

function projectClick(e){
	e.preventDefault();
	ga("send", "event", "account_btn", "click");
}

/*
 * Function that is called when the document is ready.
 */
function initializeCamera() {
  initCamera();
}