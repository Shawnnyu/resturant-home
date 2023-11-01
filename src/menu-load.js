import { generateContent } from "./util";
import Menu from "./menu.csv";

function loadMenuContent() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  for (let i = 1; i < Menu.length; i++) {
    const item = document.createElement("div");
    item.classList.add("menu-item");
    const title = generateContent(Menu[i][0]);
    title.classList.add("title");
    item.appendChild(title);

    const description = generateContent(Menu[i].slice(1).join("  -  "));
    item.appendChild(description);
    menuContainer.appendChild(item);
  }

  content.appendChild(menuContainer);
}

export { loadMenuContent };
