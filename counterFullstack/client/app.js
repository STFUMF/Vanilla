import { authController } from "./features/auth/authController.js";
import { counterController } from "./features/counter/counterController.js";
import { toggleTheme } from "./features/theme/themeController.js";
import { loadState } from "./redux/loadState.js";
import { loggerMiddleware } from "./redux/middleware/loggerMiddleware.js";
import { persistAuthMiddleware } from "./redux/middleware/persistAuthMiddleware.js";
import { thunkMiddleware } from "./redux/middleware/thunkMiddleware.js";
import { rootReducer } from "./redux/rootReducer.js";
import { countAction } from "./redux/slice/countSlice.js";
import { themeAction } from "./redux/slice/themeSlice.js";
import { createStore } from "./redux/store.js";
import { login, register } from "./redux/thunk/authenticationThunk.js";

const preLoadState = loadState();

const store = createStore(
    rootReducer, 
    [thunkMiddleware,loggerMiddleware, persistAuthMiddleware],
    preLoadState
);


authController(store);
toggleTheme(store);
counterController(store);

