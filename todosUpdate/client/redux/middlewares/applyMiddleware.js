

export function applyMiddleware(...middlewares) {
    return createStore => 
        (reducer, preloadedState) => {

            const store = createStore(reducer, undefined, preloadedState);

            let dispatch = store.dispatch;

            const middlewareAPI = {
                getState: store.getState,
                dispatch: action => dispatch(action)
            };

            const chain = middlewares.map(
                middleware => middleware(middlewareAPI)
            );

            dispatch = chain.reduceRight(
                (next, middleware) => middleware(next), dispatch );
            
            return {
                ...store,
                dispatch
            };
        };
}