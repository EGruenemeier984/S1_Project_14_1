"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Ethan Gruenemeier
   Date: 4.2.19 

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
// loads the setStyles function on load.
window.onload = setStyles;
// This creates element to set a random image on the screen also sets up thumbnail boxes by appending the images to the screen.
function setStyles() {
	var styleNum = randInt(5);
	var fancySheet = document.createElement("link");
	fancySheet.setAttribute("rel", "stylesheet");
	fancySheet.setAttribute("id", "fancySheet");
	fancySheet.setAttribute("href", `na_style_${styleNum}.css`);
	document.head.appendChild(fancySheet);
	var figBox = document.createElement("figure");
	figBox.setAttribute("id", "styleThumbs");
	document.getElementById("box").appendChild(figBox);
	for (var i = 0; i <= 4; i++) {
		var sheetImg = document.createElement("img");
		sheetImg.setAttribute("src", `na_small_${i}.png`);
		sheetImg.setAttribute("alt", `na_style_${i}.css`);
		// on click the images change based on what one clicked by the user by changing the href attribute of each image then appending it to the the figure box element.
		sheetImg.addEventListener("click", function (e) {
			document.getElementById("fancySheet").setAttribute("href", e.target.alt);
		});
		figBox.appendChild(sheetImg);
	}
	// This creates a style element for the embedded styles to go in to and also appends it to the document head.
	var thumbStyles = document.createElement("style");
	document.head.appendChild(thumbStyles);
	// This sets the styles for the embedded style sheets to position the figure box so the thumbnails appear at the bottom of the page.
	document.styleSheets[document.styleSheets.length - 1].insertRule(
		"figure#styleThumbs { \
			position: absolute; \
			left: 0px; \
			bottom: 0px; \
		}", 0);

	document.styleSheets[document.styleSheets.length - 1].insertRule(
		"figure#styleThumbs img { \
		outline: 1px solid black; \
		cursor: pointer; \
		 opacity: 0.75; \
	}", 1);

	document.styleSheets[document.styleSheets.length - 1].insertRule(
		"figure#styleThumbs img:hover { \
			outline: 1px solid red; \
			opacity: 1.0; \
		}", 2);

}


function randInt(size) {
	return Math.floor(size * Math.random());
}