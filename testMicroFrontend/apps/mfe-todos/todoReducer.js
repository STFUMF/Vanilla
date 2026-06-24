const initialState = {
  items: []
};

export default function todoReducer(
  state = initialState,
  action
) {
  switch (action.type) {

    case "ADD_TODO":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
        )
      };

    default:
      return state;
  }
}