import { EventTypes } from "../../../../core/events/eventTypes.js";
import { todoSelectors } from "../../store/todoSelectors.js";

export function createTodoCommands(controller) {
  return {
    // ---------------------------------------------------------------------
    // Business Commands
    // ---------------------------------------------------------------------

    loadTodos() {
      controller.currentLoadRequest?.cancel();

      const request = controller.thunks.loadTodos();

      controller.currentLoadRequest = request;

      return controller.store.dispatch(request);
    },

    async addTodo(todo) {
      try {
        const result = await controller.store.dispatch(
          controller.thunks.addTodo(todo),
        );

        controller.events.emit(EventTypes.TODO_CREATED, {
          todo: result,
        });

        return result;
      } catch (error) {
        controller.emitError("create", error);
        throw error;
      }
    },

    async updateTodo(todo) {
      try {
        const result = await controller.store.dispatch(
          controller.thunks.updateTodo(todo),
        );

        controller.events.emit(EventTypes.TODO_UPDATED, {
          todo: result,
        });

        return result;
      } catch (error) {
        controller.emitError("update", error);
        throw error;
      }
    },

    async deleteTodo(todo) {
      try {
        const result = await controller.store.dispatch(
          controller.thunks.deleteTodo(todo),
        );

        controller.events.emit(EventTypes.TODO_DELETED, {
          todo,
        });

        return result;
      } catch (error) {
        controller.emitError("delete", error);
        throw error;
      }
    },

    async toggleTodo(todo) {
      try {
        const result = await controller.store.dispatch(
          controller.thunks.toggleTodo(todo),
        );

        controller.events.emit(EventTypes.TODO_UPDATED, {
          todo: result,
        });

        return result;
      } catch (error) {
        controller.emitError("toggle", error);
        throw error;
      }
    },

    async archiveTodo(todo) {
      return controller.updateTodo({
        ...todo,
        archived: true,
        updatedAt: Date.now(),
      });
    },

    async restoreTodo(todo) {
      return controller.updateTodo({
        ...todo,
        archived: false,
        updatedAt: Date.now(),
      });
    },

    async undo() {
      controller.store.undo();

      await controller.todoService.replaceTodos(
        todoSelectors.items(controller.store.getState()),
      );

      controller.notifyViewChanged();
    },

    async redo() {
      controller.store.redo();

      await controller.todoService.replaceTodos(
        todoSelectors.items(controller.store.getState()),
      );

      controller.notifyViewChanged();
    },

    canUndo() {
      return controller.store.canUndo();
    },

    canRedo() {
      return controller.store.canRedo();
    },

    reloadTodos() {
      return controller.loadTodos();
    },

    emitError(operation, error) {
      controller.events.emit(EventTypes.TODO_OPERATION_FAILED, {
        operation,
        error,
      });
    },
  };
}
