import {
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE,
  TODO_SET,
  TODO_LOAD_STARTED,
  TODO_LOAD_FAILED,
} from "./todoActions.js";

const initialState = {
  items: [],
  status,
  error: null,
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_LOAD_STARTED:
      return {
        ...state,
        status: "idle",
        error: null,
      };

    case TODO_LOAD_FAILED:
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };

    case TODO_SET:
      console.log("TODO_SET payload:", action.payload);
      return {
        ...state,
        items: action.payload,
        status: "fulfilled",
        error: null,
      };

    case TODO_ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case TODO_UPDATE:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo,
        ),
      };

    case TODO_DELETE:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };

    case TODO_TOGGLE:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
                updatedAt: Date.now(),
              }
            : todo,
        ),
      };

    default:
      return state;
  }
}
