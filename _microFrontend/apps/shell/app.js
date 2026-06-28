import { renderStats } from "../mfe_stats/statsPage.js";
import { renderTodo } from "../mfe_todo/todoPage.js";
import { renderFooter } from "./layout/footer.js";
import { renderNavbar } from "./layout/navbar.js";

const navbar = document.getElementById('navbar');
const app = document.getElementById('app');
const footer = document.getElementById('footer');

const todoRoot = document.getElementById('todo-root');
const statsRoot = document.getElementById('stats-root');

renderNavbar(navbar)

renderStats(statsRoot);

renderTodo(app);


renderFooter(footer);