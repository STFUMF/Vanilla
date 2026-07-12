import { todoActions } from "../../features/todo/store/todoActionTypes.js";
import { delay } from "./delay.js";

export function FakeApi(storage) {
  return {
    async loadTodos() {
      await delay(800);
      if (Math.random() < 0.3) {
        throw new Error("Unable to load todos.");
      }
      return storage.load("todos") ?? [];
    },

    async saveTodos(todos) {
      await delay(500);
      if (Math.random() < 0.2) {
        throw new Error("Unable to save todo.");
      }
      storage.save("todos", todos);

      return todos;
    },

    async addTodo(todo) {
      await delay(500);

      const todos = storage.load("todos") ?? [];

      todos.push(todo);

      storage.save("todos", todos);

      return todo;
    },

    async updateTodo(todo) {
      await delay(500);
      throw new Error("Update failed");
      const todos = storage.load("todos") ?? [];

      const updated = todos.map((item) => (item.id === todo.id ? todo : item));

      storage.save("todos", updated);

      return todo;
    },

    async deleteTodo(id) {
      await delay(500);

      throw new Error("Delete failed");
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
