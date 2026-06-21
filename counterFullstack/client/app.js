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

const homePage = document.getElementById('homePage')

const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');


const incrementBtn = document.querySelector('.incrementBtn')
const decrementBtn = document.querySelector('.decrementBtn')

const themeToggle = document.querySelector('.themeToggle')

themeToggle.addEventListener('click', () => {

    store.dispatch(themeAction.toggleTheme());
    document.querySelector('body').className = store.getState().theme
    console.log(store.getState().theme)
})



function redirectIfAuthenticated(){
    const tokens = store.getState().auth?.token

    const isAuthPage = loginForm || registrationForm;

    if (tokens && isAuthPage){
        window.location.replace("../../index.html")
    }
}

function requireAuth(){
    const token = store.getState().auth?.token;

    if (!token){
        window.location.replace("./pages/authentication/login.html")
    }
}

if(homePage){
    requireAuth();
    const counter = document.getElementById('counter');
    function render(){
        counter.textContent = store.getState().count || 0
    }

        incrementBtn.addEventListener('click', () => {
        store.dispatch(countAction.increment())
    })

    decrementBtn.addEventListener('click', () => {
        store.dispatch(countAction.decrement());
    })

    render();
    store.subscribe(render); 

}


if(registrationForm){
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fname = document.getElementById('name').value.trim();
    const femail = document.getElementById('email').value.trim();
    const fpassword = document.getElementById('password').value;
    const fconfirmPassword = document.getElementById('confirmPassword').value;

    if (fpassword !== fconfirmPassword) {
        alert('Passwords do not match');
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

        console.log(store.getState());
    })
}


if (loginForm || registrationForm){
    store.subscribe(redirectIfAuthenticated);
    redirectIfAuthenticated();
}

console.log(store.getState());