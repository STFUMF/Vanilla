import {
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE,
  TODO_SET,
  TODO_LOAD_STARTED,
  TODO_LOAD_FAILED,
} from "./todoActions.js";

export const todoActions = {
  loadStarted() {
    return {
      type: TODO_LOAD_STARTED,
      meta: {
        history: false,
      },
    };
  },

  loadFailed(error) {
    return {
      type: TODO_LOAD_FAILED,
      payload: error,
      meta: {
        history: false,
      },
    };
  },

  add(todo) {
    return {
      type: TODO_ADD,
      payload: todo,
      meta: {
        history: true,
      },
    };
  },

  update(todo) {
    return {
      type: TODO_UPDATE,
      payload: todo,
      meta: {
        history: true,
      },
    };
  },

  remove(id) {
    return {
      type: TODO_DELETE,
      payload: id,
      meta: {
        history: true,
      },
    };
  },

  toggle(id) {
    return {
      type: TODO_TOGGLE,
      payload: id,
      meta: {
        history: true,
      },
    };
  },

  set(todos) {
    return {
      type: TODO_SET,
      payload: todos,
      meta: {
        history: false,
      },
    };
  },
};
