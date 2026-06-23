export const todoEvents = {
    // lifecycle events
    INIT: "TODO_INIT",
    LOADED: "TODO_LOADED",

    // CRUD events
    CREATED: "TODO_CREATED",
    UPDATED: "TODO_UPDATED",
    DELETED: "TODO_DELETED",
    TOGGLED: "TODO_TOGGLED",

    // UI events
    RENDERED: "TODO_RENDERED",

    // async / system events
    FETCH_START: "TODO_FETCH_START",
    FETCH_SUCCESS: "TODO_FETCH_SUCCESS",
    FETCH_ERROR: "TODO_FETCH_ERROR"
};