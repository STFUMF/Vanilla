import { FakeApi } from "@core/api";
import { createPlugin } from "../../core/plugin/createPlugin";

import {
  createStoreService as StorageService,
  LocalStorageAdapter,
} from "@core/storage";
import { TodoRepository } from "./repository/TodoRepository.js";
import { TodoService } from "./services/TodoService.js";

const storage = StorageService(LocalStorageAdapter);

const api = FakeApi(storage);

const todoRepository = new TodoRepository(api);

const todoService = new TodoService(todoRepository);

export const TodoPlugin = createPlugin({
  name: "todo",

  install({ register }) {
    console.log("Todo Plugin installed");
    register("todoService", todoSer);
  },
});
