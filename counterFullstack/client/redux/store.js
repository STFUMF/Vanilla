

export function createStore(reducer, middlewares = [], preloadState){

    let state = 
        preloadState !== undefined
            ? preloadState
            : reducer(undefined, {type: '@@INIT'})
            
    let subscribers = [];


    function getState(){
        return state
    }

    function subscribe(fn){
        subscribers.push(fn);

        return () => { // Unsubscribe
            subscribers = subscribers.filter(listener => listener !== fn)
        }
    }

    function dispatch(action){
        state = reducer(state, action);

        subscribers.forEach(listener => listener());

        return action;
    }

    const store =  {
        getState,
        subscribe,
        dispatch
    }

    // Apply middleware
    let enhancedDispatch = dispatch;

    middlewares
        .slice()
        .reverse()
        .forEach(middleware => {
            enhancedDispatch = middleware(store)(enhancedDispatch);
        });

    store.dispatch = enhancedDispatch;

    return store;
} 