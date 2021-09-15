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

// Initialize either modal or permanent drawer
const initModalDrawer = () => {
  drawerElement.classList.add("mdc-drawer--modal");
  const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
  drawer.open = false;

  const topAppBar = MDCTopAppBar.attachTo(topAppBarElement);
  topAppBar.listen("MDCTopAppBar:nav", () => {
    drawer.open = !drawer.open;
  });

  return drawer;
};

let drawer = window.matchMedia("(max-width: 900px)").matches;
initModalDrawer();
