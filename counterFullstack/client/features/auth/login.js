import { login } from "../../redux/thunk/authenticationThunk.js";


export function loginForm(e, store){

        e.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value.trim();
        const loginPassword = document.getElementById('loginPassword').value;

        store.dispatch(login(loginEmail, loginPassword));

        console.log(loginEmail, loginPassword)
}
