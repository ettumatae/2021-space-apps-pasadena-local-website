import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCRipple } from "@material/ripple";
import { MDCDrawer } from "@material/drawer";
import { MDCList } from "@material/list";
import { MDCTabBar } from "@material/tab-bar";

// Instantiation Material button
const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));

// Instantiation Card
const selector = ".mdc-button, .mdc-icon-button, .mdc-card__primary-action";
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
  return new MDCRipple(el);
});

//
// Drawer
//
// Select DOM elements
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const listEl = document.querySelector(".mdc-drawer .mdc-list");
const drawerElement = document.querySelector(".mdc-drawer");
const mainContentEl = document.querySelector(".main-content");

// Initialize modal drawer
const initModalDrawer = () => {
  drawerElement.classList.add("mdc-drawer--modal");
  const drawer = MDCDrawer.attachTo(drawerElement);
  drawer.open = false;

  const topAppBar = MDCTopAppBar.attachTo(topAppBarElement);
  topAppBar.listen("MDCTopAppBar:nav", () => {
    drawer.open = !drawer.open;
  });

  listEl.addEventListener('click', (event) => {
    drawer.open = false;
  });

  return drawer;
};

let drawer = window.matchMedia("(max-width: 900px)").matches;
initModalDrawer();

const resizeHandler = () => { 
  if (window.matchMedia("(max-width: 900px)").matches && drawer instanceof MDCList) {
    drawer.destroy();
    drawer = initModalDrawer();
  } else if (window.matchMedia("(min-width: 900px)").matches && drawer instanceof MDCDrawer) {
    drawer.destroy();
    drawer = initPermanentDrawer();
  }
}
window.addEventListener('resize', resizeHandler);
