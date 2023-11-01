import { navButtonClicked, generateContent } from "./util";
import Cites from "./cites.csv";

function loadHeader() {
  const header = document.createElement("header");
  const headingH1 = document.createElement("h1");
  const content = document.createTextNode("The Neon Pub");

  headingH1.appendChild(content);
  header.appendChild(headingH1);
  header.appendChild(loadNav());
  return header;
}

function loadNav() {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.innerText = "Home";
  homeBtn.classList.add("nav-btn");
  //initial page load sets the home button to active
  homeBtn.classList.add("active");
  homeBtn.addEventListener("click", (e) => navButtonClicked(e, "Home"));

  const menuBtn = document.createElement("button");
  menuBtn.innerText = "Menu";
  menuBtn.classList.add("nav-btn");
  menuBtn.addEventListener("click", (e) => navButtonClicked(e, "Menu"));

  const contactBtn = document.createElement("button");
  contactBtn.innerText = "Contact";
  contactBtn.classList.add("nav-btn");
  contactBtn.addEventListener("click", (e) => navButtonClicked(e, "Contact"));

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function loadFooter() {
  const footer = document.createElement("footer");

  for (let i = 1; i < Cites.length; i++) {
    const cite = `${Cites[i][0]} by ${Cites[i][1]} on ${Cites[i][2]}`;
    footer.appendChild(generateContent(cite));
  }

  return footer;
}

export { loadHeader, loadFooter };
