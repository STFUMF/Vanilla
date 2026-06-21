
export const persistAuthMiddleware =
    store => 
        next =>
            action => {
                
                const result = next(action);

                const state = store.getState();

                console.log(action.type)
                if(
                    action.type === 'auth/loginSuccess' || 
                    action.type === 'auth/registerSuccess' ||
                    action.type === 'auth/logout'
                ) {
                    
                    localStorage.setItem("auth", JSON.stringify(state.auth));
                }
                return result;
            };
