

export function createStore(rootReducer, enhancer, preloadedState){

    if (enhancer){
        return enhancer(createStore)(
            rootReducer,
            preloadedState
        )
    }

    let state = preloadedState

    let listeners = [];

    function getState(){
        return state
    }

    function subscribe(fn){
        listeners.push(fn);

        return () => {
            listeners = listeners.filter(listener => listener !== fn)
        }
    }

    function dispatch(action) {
        state = rootReducer(state, action);

        listeners.forEach(listener => listener());
    }

    dispatch({ type: "@@INIT"})

    return {
        getState,
        subscribe,
        dispatch
    }
}