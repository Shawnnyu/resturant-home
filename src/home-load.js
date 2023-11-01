import homePageImage from "/dist/images/homepageImage.jpg";
import { generateContent } from "./util";
import About from "./about.xml";

function loadHomeContent() {
  const img = new Image();
  img.src = homePageImage;
  img.classList.add("homepage-img");
  content.appendChild(img);

  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  const intro = generateContent("Glowing since 1910");
  intro.classList.add("intro-home");
  const hoursContent = generateContent(`${About["about"]["address"][0]["line1"]}
${About["about"]["address"][0]["line2"]}
Weekdays:${About["about"]["schedule"][0]["weekdays"]}
Weekends:${About["about"]["schedule"][0]["weekends"]}
Happy Hour:${About["about"]["schedule"][0]["happyhour"]}`);
  introContainer.appendChild(intro);
  introContainer.appendChild(hoursContent);

  content.appendChild(introContainer);
}

export { loadHomeContent };
