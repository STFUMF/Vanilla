

export function notificationMiddlware(store) {
    
    return function(next) {

        return function (action) {

            const result = next(action);

            switch(action.type) {

                case "ADD_TODO":

                    notify("Todo added.");
                    break;

                case "REMOVE_TODO":

                    notify("Todo removed.");
                    break;

                case TOGGLE_TODO:
                    notify("Todo updated.");
                    break;
            }
        }
    }
}