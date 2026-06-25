import { store } from "../shell/store.js";

import {addTodo} from "./todoActions.js";

import { renderTodoList} from "./todoView.js";

export function render(root) {

  root.innerHTML = `
    <h1>Todo App</h1>

    <input id="todoInput" />
    <button id="addBtn">
      Add
    </button>

    <ul id="todoList"></ul>
  `;

  const input = root.querySelector("#todoInput");

  const button = root.querySelector("#addBtn");

  const list = root.querySelector("#todoList");

  function update() {
    renderTodoList(list);
  }

  button.addEventListener("click", () => {

    store.dispatch(addTodo(input.value));

    input.value = "";
  });

  store.subscribe(update);

  update();
}