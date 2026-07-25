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
  visible: createSelector(
    [(state) => state.note.items, (_, search) => search],

    (items, search) => {
      // Hide archived
      items = items.filter((note) => !note.archived);

      if (!search.trim()) {
        return items;
      }

      const query = search.toLowerCase();

      return items.filter((note) => {
        return (
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query)
        );
      });
    },
  ),
};
