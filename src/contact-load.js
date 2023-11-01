import { generateContent } from "./util";

function loadContactContent() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const intro = generateContent("Contact Us!");
  intro.classList.add("intro-contact");
  const contactContent = generateContent("+10 (201) 797-1898\ntheneonpub@gmail.com");

  contactContainer.appendChild(intro);
  contactContainer.appendChild(contactContent);

  content.appendChild(contactContainer);
}

export { loadContactContent };
