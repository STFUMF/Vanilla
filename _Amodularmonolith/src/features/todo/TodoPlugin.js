import { FakeApi } from "@core/api";
import { createPlugin } from "../../core/plugin/createPlugin";

import {
  createStoreService as StorageService,
  LocalStorageAdapter,
} from "@core/storage";
import { TodoRepository } from "./repository/TodoRepository.js";
import { TodoService } from "./services/TodoService.js";
import { createLoadTodos } from "./store/thunks/loadTodos.js";
import { createAddTodoThunk } from "./store/thunks/addTodoThunk.js";
import { createUpdateTodo } from "./store/thunks/updateTodoThunk.js";
import { createDeleteTodo } from "./store/thunks/deleteTodoThunk.js";
import { createToggleTodoThunk } from "./store/thunks/toggleTodoThunk.js";
import { TodoController } from "./controllers/TodoController.js";
import { TodoRoutesPlugin } from "./TodoRoutesPlugin.js";

export const TodoPlugin = createPlugin({
  name: "todo",

  install({ use, register, resolve }) {
    const storage = resolve("storage");
    const store = resolve("store");
    const events = resolve("events");

    const api = FakeApi(storage);

    const todoRepository = new TodoRepository(api);

    const todoService = new TodoService(todoRepository);

    // Controller
    const todoThunks = {
      loadTodos: createLoadTodos(todoService),
      addTodo: createAddTodoThunk(todoService),
      updateTodo: createUpdateTodo(todoService),
      deleteTodo: createDeleteTodo(todoService),
      toggleTodo: createToggleTodoThunk(todoService),
    };

    const todoController = new TodoController(
      store,
      todoThunks,
      todoService,
      events,
    );

    register("todoService", todoService);
    register("todoController", todoController);

    todoController.loadTodos();
    use(TodoRoutesPlugin);
  },
});
