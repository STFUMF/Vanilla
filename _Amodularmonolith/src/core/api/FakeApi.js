import { todoActions } from "../../features/todo/store/todoActionTypes.js";
import { Logger } from "@core/Logger";
import { delay } from "./delay.js";

export function FakeApi(storage) {
  return {
    async loadTodos({ signal } = {}) {
      const todos = storage.load("todos") ?? [];

      //console.log("FakeApi:", todos);

      if (signal?.aborted) {
        throw new Error("Request aborted");
      }

      //console.log("FakeApi todos:", todos);
      return todos;
    },

    async addTodo(todo, { signal } = {}) {
      //await delay(500, signal);
      console.log("added");
      const todos = storage.load("todos") ?? [];

      todos.push(todo);

      storage.save("todos", todos);
      Logger.debug("Sorage,", "Saving todos", todos);
      return todo;
    },

    async updateTodo(todo) {
      // await delay(500);
      // throw new Error("Update failed");
      const todos = storage.load("todos") ?? [];

      const updated = todos.map((item) => (item.id === todo.id ? todo : item));

      storage.save("todos", updated);
      console.log(storage.load("todos"));

      return todo;
    },

    async deleteTodo(id) {
      // await delay(500);

      //  throw new Error("Delete failed");
      const todos = storage.load("todos") ?? [];

      const filtered = todos.filter((todo) => todo.id !== id);

      storage.save("todos", filtered);

      return id;
    },

    async toggleTodo(todo) {
      //await delay(500);

      const todos = storage.load("todos") ?? [];

      const updated = todos.map((item) =>
        item.id === todo.id ? !todo.completed : todo,
      );

      storage.save("todos", updated);

      return id;
    },
  };
}

function throwIfAborted(signal) {
  if (signal?.aborted) {
    throw new Error("Request aborted");
  }
}
