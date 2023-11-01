import { loadFooter, loadHeader } from "./page-load";
import { loadHomeContent } from "./home-load";

document.body.insertBefore(loadHeader(), document.body.firstChild);
document.body.appendChild(loadFooter());
loadHomeContent();
