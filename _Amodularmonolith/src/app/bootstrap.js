import { TodoController } from "../features/todo/controllers/TodoController.js";
import { todoActions } from "../features/todo/store/todoActionTypes.js";

/**
 * Bootstraps starts the application.
 * 
 * @param {object} store
 * @param {TodoService} todoService
 */

import { createApp } from "./app";

export function bootstrap(store, todoService) {
    const todoController = new TodoController();
    const todos = todoService.loadTodos();

    todoController.loadTodos(todos);
  //  createApp();
}