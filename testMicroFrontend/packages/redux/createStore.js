
export function createStore(reducer){

    let state;
    const listeners = [];

    function getState(){
        return state;
    }

    function subscribe(listener){
        listeners.push(listener);

        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    function dispatch(action){
        state = reducer(state, action);

        listeners.forEach(listener => listener());
    }

    dispatch({ type: "@@INIT"})

    return {
        getState,
        dispatch,
        subscribe
    };
}