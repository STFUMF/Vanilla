import { store } from "../shell/store.js";
import { toggleTodo } from "./todoActions.js";

export function renderTodoList(container) {

  const state = store.getState();

  container.innerHTML = "";

  state.todos.items.forEach(todo => {

    const li = document.createElement("li");

    li.textContent = todo.text;

    if (todo.completed) {
      li.style.textDecoration =
        "line-through";
    }

    li.addEventListener("click", () => {
      store.dispatch(
        toggleTodo(todo.id)
      );
    });

    container.appendChild(li);
  });
}