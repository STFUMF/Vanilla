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
      console.log("FakeApi saving:", todos);
      await delay(500);

      storage.save("todos", todos);

      console.log("Stored:", storage.load("todos"));
      return todos;
    },
  };
}
