import { EventTypes } from "../../../core/events/eventTypes.js";
import { TodoCategories } from "../constants/TodoCategories.js";
import { todoSelectors } from "../store/todoSelectors.js";

import { createTodoQueries } from "./queries/createTodoQueries.js";
import { createTodoViewState } from "./viewState/createTodoViewState.js";
import { createTodoSelection } from "./selection/createTodoSelection.js";
import { createTodoCommands } from "./commands/createTodoCommands.js";
import { createTodoInteractions } from "./interactions/createTodoInteractions.js";

export class TodoController {
  /**
   * @param {Store} store
   */

  /// rename actions to thunks
  constructor(store, thunks, todoService, events) {
    this.store = store;

    this.thunks = thunks;
    this.todoService = todoService;
    this.events = events;
    this.currentLoadRequest = null;

    // View state
    this.title = "";
    this.category = TodoCategories.PERSONAL;

    // Edit UI state
    this.editingTodoId = null;
    this.editTitle = "";

    this.search = "";

    this.filters = {
      status: "all",
      priority: "all",
      category: TodoCategories.ALL,
      dueDate: "all",
    };

    this.sort = "created-desc";

    this.priority = "medium";

    this.dueDate = "";

    this.selectedTodoIds = new Set();

    // View update callback
    this.onViewChanged = () => {};

    Object.assign(
      this,
      createTodoQueries(this),
      createTodoViewState(this),
      createTodoSelection(this),
      createTodoCommands(this),
      createTodoInteractions(this),
    );
  }

  // ---------------------------------------------------------------------
  // Business Commands
  // ---------------------------------------------------------------------

  // ---------------------------------------------------------------------
  // ViewModel Commands
  // ---------------------------------------------------------------------

  // ---------------------------------------------------------------------
  // View State
  // ---------------------------------------------------------------------

  // ---------------------------------------------------------------------
  // Selectors
  // ---------------------------------------------------------------------

  // ---------------------------------------------------------------------
  // Utilities
  // ---------------------------------------------------------------------
}
