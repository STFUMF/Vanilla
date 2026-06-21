
export const persistAuthMiddleware =
    store => 
        next =>
            action => {
                
                const result = next(action);

                const state = store.getState();


                if(
                    action.type === 'LOGIN_SUCCESS' || 
                    action.type === 'REGISTER_SUCCESS' ||
                    action.type === 'LOGOUT'
                ) {

                    localStorage.setItem("auth", JSON.stringify(state.auth));
                }
                return result;
            };