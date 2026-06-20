import { loggerMiddleware } from "./redux/middleware/loggerMiddleware.js";
import { thunkMiddleware } from "./redux/middleware/thunkMiddleware.js";
import { rootReducer } from "./redux/rootReducer.js";
import { countAction } from "./redux/slice/countSlice.js";
import { createStore } from "./redux/store.js";
import { login, register } from "./redux/thunk/authenticationThunk.js";

const store = createStore(rootReducer, [thunkMiddleware,loggerMiddleware]);

const registerationForm = document.getElementById('registerationForm');
const loginForm = document.getElementById('loginForm');


store.dispatch(countAction.increment())
store.dispatch(countAction.increment())

if(registerationForm){
registerationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fname = document.getElementById('name').value.trim();
    const femail = document.getElementById('email').value.trim();
    const fpassword = document.getElementById('password').value;
    const fconfirmPassword = document.getElementById('confirmPassword').value;

    if (fpassword !== fconfirmPassword) {
        alert('Passwords do not much');
        return;
    }

    store.dispatch(register(fname, femail, fpassword))
});
}

if(loginForm){
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value;

    store.dispatch(login(loginEmail, loginPassword));
})
}

store.dispatch((dispatch, getState) => {
    setTimeout(() => {
        dispatch({ type: 'DECREMENT' });
    }, 1000);
});
