var main = function () {
	"use strict";

	$.ajax({
	  	type: "GET",
	  	url: "newsLink.js",
		dataType: "script"
	});
};
$(document).ready(main);