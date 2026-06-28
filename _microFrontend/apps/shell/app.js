import { renderFilter } from "../mfe_filter/filterPage.js";
import { renderSearch } from "../mfe_search/searchPage.js";
import { renderStats } from "../mfe_stats/statsPage.js";
import { renderTodo } from "../mfe_todo/todoPage.js";
import { renderFooter } from "./layout/footer.js";
import { renderNavbar } from "./layout/navbar.js";

const navbar = document.getElementById('navbar');
const app = document.getElementById('app');
const footer = document.getElementById('footer');

const todoRoot = document.getElementById('todo-root');
const statsRoot = document.getElementById('stats-root');
const filterRoot = document.getElementById("filter-root")

const searchRoot = document.getElementById('search-root');

renderNavbar(navbar)

renderSearch(searchRoot)
renderStats(statsRoot);
renderFilter(filterRoot)

renderTodo(app);


renderFooter(footer);