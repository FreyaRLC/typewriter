"use strict";

let contentDest;
let actualText;
let counter = 0;
let ourLength;
// let chars = originalString.split(""); WE DONT NEED TO MAKE AN ARRAY

document.addEventListener("DOMContentLoaded", init);

function init() {
  contentDest = document.querySelector("#typewriter");
  actualText = contentDest.textContent;
  ourLength = actualText.length;
  contentDest.textContent = "";
  loop();
}

function loop() {
  if (counter < ourLength) {
    contentDest.textContent += actualText[counter];
    counter++;
    setTimeout(loop, 100);
  }
}
