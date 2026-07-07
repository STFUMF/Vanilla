import { createApp } from "./app";

import { createStore } from "../core/store"

import { createStoreService as StorageService } from "../core/storage";
import { LocalStorageAdapter } from "../core/storage";

import { TodoRepository } from "../features/todo/repository/TodoRepository.js";
import { TodoController } from "../features/todo/controllers/TodoController.js";
import { TodoService } from "../features/todo/services/TodoService.js";
import { todoActions } from "../features/todo/store/todoActionTypes.js";

import { rootReducer } from "./registerStore.js";

/**
 * Bootstraps starts the application.
 * 
 * @param {object} store
 * @param {TodoService} todoService
 */



export function bootstrap() {
    // Store

    const store = createStore(rootReducer);

    // Storage

    const storage = StorageService(
        LocalStorageAdapter
    );

    // Repository

    const todoRepository = new TodoRepository(storage);

    // Service

    const todoService = new TodoService(todoRepository);

    // Controller

    const todoController = new TodoController(store);

    // Initial data
    todoController.loadTodos(
        todoService.loadTodos()
    );

    // Start UI

    createApp({
        root: document.querySelector("#app"),
        store,
        todoController,
    })

}