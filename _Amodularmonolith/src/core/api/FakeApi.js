import { todoActions } from "../../features/todo/store/todoActionTypes.js";
import { Logger } from "@core/Logger";
import { delay } from "./delay.js";

export function FakeApi(storage) {
  return {
    async loadTodos({ signal } = {}) {
      await delay(1000, signal);

      if (signal?.aborted) {
        throw new Error("Request aborted");
      }
      await delay(800, signal);
      if (Math.random() < 0.3) {
        //  throw new Error("Unable to load todos.");
      }

      return storage.load("todos") ?? [];
    },

    async addTodo(todo, { signal } = {}) {
      await delay(500, signal);
      console.log("added");
      const todos = storage.load("todos") ?? [];

      todos.push(todo);

      storage.save("todos", todos);
      Logger.debug("Sorage,", "Saving todos", todos);
      return todo;
    },

    async updateTodo(todo) {
      await delay(500);
      // throw new Error("Update failed");
      const todos = storage.load("todos") ?? [];

      const updated = todos.map((item) => (item.id === todo.id ? todo : item));

      storage.save("todos", updated);

      return todo;
    },

    async deleteTodo(id) {
      await delay(500);

      //  throw new Error("Delete failed");
      const todos = storage.load("todos") ?? [];

      const filtered = todos.filter((todo) => todo.id !== id);

      storage.save("todos", filtered);

      return id;
    },

    async toggleTodo(todo) {
      await delay(500);

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
