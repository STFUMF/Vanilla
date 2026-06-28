export const persistMiddleware =
    (store) => 
        next =>
            action => {
                const result = next(action);
                const state = store.getState();
                localStorage.setItem("my-app", JSON.stringify(store.getState()));

                return result;
            }