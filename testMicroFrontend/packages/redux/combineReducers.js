

export function combineReducers(reducers){
    return function rootReduer(state = {}, action){
        const nextState = {};

        for (const key in reducers){
            nextState[key] = reducers[key](
                state[key],
                action
            );
        }

        return nextState;
    }
}