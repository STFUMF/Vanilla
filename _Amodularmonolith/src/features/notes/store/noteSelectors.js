import { createSelector } from "@core/store";

export const noteSelectors = {
  items(state) {
    return state.note.items;
  },

  status(state) {
    return state.note.status;
  },

  error(state) {
    return state.note.error;
  },

  total: createSelector([(state) => state.note.items], (items) => items.length),

  archived: createSelector([(state) => state.note.items], (items) =>
    items.filter((note) => note.archived),
  ),

  active: createSelector([(state) => state.note.items], (items) =>
    items.filter((note) => !note.archived),
  ),
  visible: {},
};
