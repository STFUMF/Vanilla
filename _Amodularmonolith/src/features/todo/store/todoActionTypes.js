import { 
    TODO_ADD, 
    TODO_UPDATE,
    TODO_DELETE,
    TODO_TOGGLE,
    TODO_SET
} from "./todoActions.js";

export const todoActions = {
    add(todo) {
        return {
            type: TODO_ADD,
            payload: todo,
        }
    },

    update(todo) {
        return {
            type: TODO_UPDATE,
            payload: todo,
        };
    },

    remove(id){ 
        return {
            type: TODO_DELETE,
            payload: id,
        };
    },

    toggle(id) {
        return {
            type: TODO_TOGGLE,
            payload: id,
        };
    },

    set(todos) {
        return {
            type: TODO_SET,
            payload: todos,
        };
    },
};