export const loggerMiddleware = 
    store =>
        next=>
            action => {
                console.log("Dispatching: ", action);
                console.log("Previous State:", store.getState());

                const result = next(action);

                console.log("Next State: ", store.getState());

                return result;
            };