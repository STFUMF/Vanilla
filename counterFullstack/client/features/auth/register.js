import { register } from "../../redux/thunk/authenticationThunk.js";

const registrationForm = document.getElementById('registrationForm');

export function registerForm(e, store){
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
}