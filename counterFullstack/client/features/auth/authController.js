import { loginForm } from "./login.js";
import { registerForm } from "./register.js";


export function authController(store){
    const logForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm')

    if(logForm){
        logForm.addEventListener('submit', (e) => {
            loginForm(e, store);
        })
    }

    if(registrationForm){
        registrationForm.addEventListener('submit', (e) => {
            registerForm(e, store);
        })
    }

    function redirectIfAuthenticated(){
        const tokens = store.getState().auth?.token

        const isAuthPage = logForm || registrationForm;

        if (tokens && isAuthPage){
            window.location.replace("../pages/index.html")
        }
    }

    function requireAuth(){
        const token = store.getState().auth?.token;

        if (!token){
            window.location.replace("../pages/login.html")
        }
    }

    redirectIfAuthenticated();
    requireAuth();

}