
export const persistMiddleware =
    (store) => 
        next =>
            action => {
                const result = next(action);

                localStorage.setItem("APP_STATE", JSON.stringify(store.getState()));

                return result;
            }