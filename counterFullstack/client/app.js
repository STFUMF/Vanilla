import { loggerMiddleware } from "./redux/middleware/loggerMiddleware.js";
import { thunkMiddleware } from "./redux/middleware/thunkMiddleware.js";
import { rootReducer } from "./redux/rootReducer.js";
import { countAction } from "./redux/slice/countSlice.js";
import { createStore } from "./redux/store.js";




const store = createStore(rootReducer, [thunkMiddleware,loggerMiddleware]);


store.dispatch(countAction.increment())
store.dispatch(countAction.increment())

store.dispatch((dispatch, getState) => {
    setTimeout(() => {
        dispatch({ type: 'DECREMENT' });
    }, 1000);
});

