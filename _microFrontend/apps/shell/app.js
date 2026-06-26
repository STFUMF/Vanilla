import { renderTodo } from "../mfe_todo/todoPage.js";
import { renderFooter } from "./layout/footer.js";
import { renderNavbar } from "./layout/navbar.js";

const navbar = document.getElementById('navbar');
const app = document.getElementById('app');
const footer = document.getElementById('footer');

renderNavbar(navbar)
renderTodo(app);
renderFooter(footer);