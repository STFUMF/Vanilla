import { registerSlot } from "./layoutManager.js";

registerSlot("header", document.querySelector("#header-root"));

registerSlot("sidebar", document.querySelector("#sidebar-root"));

registerSlot("main", document.querySelector("#main-root"));

registerSlot("inspector", document.querySelector("#inspector-root"));

registerSlot("notifications", document.querySelector("#notification-root"));

registerSlot("footer", document.querySelector("#footer-root"));