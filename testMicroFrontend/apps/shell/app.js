/* import { mountTodoPage } from "../mfe-todos/todoPage.js";

const root =  document.getElementById("app");

mountTodoPage(root); */

import { registerRoute, startRouter } from "./router.js";


const app = document.getElementById('app');

registerRoute("/", async () => ({
  render(container){
    container.innerHTML = `
      <h1>Shell Home</h1>

      <ul>
        <li><a href="#/todos">Todos</a></li>
        <li><a href="#/user">User</a></li>
        <li><a href="#/notifcations">Notifications</a></li>
      </ul>
    `
  }
}));

registerRoute("/todos", () => import("../mfe-todos/todoPage.js"));
registerRoute("/user", () => import("../mfe-user/userPage.js"));

startRouter();