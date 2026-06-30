/* import { renderFilter } from "../mfe_filter/filterPage.js";
import { renderNotifications } from "../mfe_notification/notificationPage.js";
import { renderSearch } from "../mfe_search/searchPage.js";
import { renderStats } from "../mfe_stats/statsPage.js";
import { renderTheme } from "../mfe_theme/themePage.js";
import { renderTodo } from "../mfe_todo/todoPage.js";
import { renderFooter } from "./layout/footer.js";
import { renderNavbar } from "./layout/navbar.js";


const navbar = document.getElementById('navbar');
const app = document.getElementById('app');
const footer = document.getElementById('footer');

const theme = document.getElementById('theme')

const todoRoot = document.getElementById('todo-root');
const statsRoot = document.getElementById('stats-root');
const filterRoot = document.getElementById("filter-root")

const searchRoot = document.getElementById('search-root');
const notificationRoot = document.getElementById('notification-root')



renderTheme(theme)
renderNavbar(navbar)

renderNotifications(notificationRoot);

renderSearch(searchRoot)
renderStats(statsRoot);
renderFilter(filterRoot)

renderTodo(app);


renderFooter(footer); */
import "./platform/allPlugins.js";

import { startThemeManager } from "./platform/themeManager.js";
import { boot } from "./platform/bootstrap.js";
startThemeManager();
boot();
