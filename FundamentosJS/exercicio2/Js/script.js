import calculate from "./calculate.js";
import copyToClipBoard from "./copyToClipBoard.js";
import {
  handleButtonPress,
  handleClear,
  handleKeyDown,
} from "./keyHandless.js";
import themeSwitcher from "./themeSwitcher.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClear);
document.getElementById("input").addEventListener("keydown", handleKeyDown);
document.getElementById("equal").addEventListener("click", calculate);
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipBoard);
document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
