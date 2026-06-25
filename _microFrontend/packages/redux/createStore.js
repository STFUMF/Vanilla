

export function createStore(reducer){

    let state;
    let listeners = [];

    function getState(){
        return state;
    }

    function subscribe(listener){
        listeners.push(listener);

        return function(){
            listeners = listeners.filter(li => li !== listener);
        }
    }

    function dispatch(action){
        state = reducer(state, action);

        listeners.forEach(listener => listener());
    }

    dispatch({ type: "@@INIT"})

    return {
        getState,
        dispatch,
        subscribe
    }
}