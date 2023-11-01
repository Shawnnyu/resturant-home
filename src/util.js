import { loadHomeContent } from "./home-load";
import { loadMenuContent } from "./menu-load";
import { loadContactContent } from "./contact-load";

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function generateContent(text) {
  const para = document.createElement("p");
  const content = document.createTextNode(text);
  para.appendChild(content);

  return para;
}

function resetScreen() {
  const content = document.querySelector("#content");
  removeChildren(content);

  const [...buttons] = document.querySelectorAll(".nav-btn");
  buttons.forEach((button) => button.classList.remove("active"));
}

function navButtonClicked(e, name) {
  resetScreen();
  e.target.classList.add("active");
  switch (name) {
    case "Home":
      loadHomeContent();
      break;
    case "Menu":
      loadMenuContent();
      break;
    case "Contact":
      loadContactContent();
      break;
  }
}

export { removeChildren, generateContent, navButtonClicked };
