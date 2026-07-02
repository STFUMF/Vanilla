

import { registerSlot } from "./layoutManager.js";

registerSlot('todo', document.querySelector('#todo-root'))
registerSlot("filter", document.querySelector('#filter-root'))
registerSlot("search", document.querySelector('#search-root'))
registerSlot("notifications", document.querySelector('#notification-root'))
registerSlot("stats", document.querySelector('#stats-root'))
registerSlot("theme", document.querySelector('#theme-root'))
registerSlot("dashboard", document.querySelector("#pluginDashboard"))
registerSlot("navigation", document.querySelector("#navigation"))



