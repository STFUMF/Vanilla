/* {
    id: crypto.randomUUID(),

    title: "",

    content: "",

    tags: [],

    archived: false,

    createdAt: Date.now(),

    updatedAt: Date.now(),
} */

import { NoteActionTypes } from "./noteActionTypes.js";
import { initialNoteState } from "./initialNoteState.js";

export function noteReducer(state = initialNoteState, action) {
  switch (action.type) {
    case NoteActionTypes.LOAD_STARTED:
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case NoteActionTypes.LOAD_SUCCEEDED:
      return {
        ...state,
        status: "fulfilled",
        items: action.payload,
      };

    case NoteActionTypes.LOAD_FAILED:
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };

    case NoteActionTypes.ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case NoteActionTypes.UPDATE:
      return {
        ...state,
        items: state.items.map((note) =>
          note.id === action.payload.id ? action.payload : note,
        ),
      };

    case NoteActionTypes.DELETE:
      return {
        ...state,
        items: state.items.filter((note) => note.id !== action.payload),
      };

    default:
      return state;
  }
}
