export const persistMiddleware =
    (store) => 
        next =>
            action => {
                const result = next(action);

                localStorage.setItem("my-app", JSON.stringify(store.getState()));

                return result;
            }