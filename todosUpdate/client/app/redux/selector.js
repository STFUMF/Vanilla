

export function createSelector(inputSelector, resultFn){
    let lastInput;
    let lastResult;

    return state => {
        const input = inputSelector(state);

        if (input === lastInput) {
            console.log('Cache hit')
            return lastResult;
        }

        console.log("selector recomputed");

        lastInput = input;
        lastResult = resultFn(input);

        return lastResult

    }
}