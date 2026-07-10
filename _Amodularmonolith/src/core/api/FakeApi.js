import { delay } from "./delay.js";

export function FakeApi(storage) {
  return {
    async loadTodos() {
      await delay(800);

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
