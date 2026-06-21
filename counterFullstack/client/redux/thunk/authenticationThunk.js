import { authActions } from "../slice/authSlice.js";

export function login(email, password) {
    return async function (dispatch){
        dispatch(authActions.loginRequest());
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            console.log(data)
            if(response.ok){
                dispatch(authActions.loginSuccess(data.user, data.token));
                console.log(data.token)
                localStorage.setItem("auth", JSON.stringify(data))
                window.location.href = "../pages/index.html"
            }
            
            console.log(data);
        } catch (err) {
            dispatch(authActions.loginFailure(err.message))
        }
    }
}

export function register(name, email, password) {
    return async function(dispatch) {

        dispatch(authActions.registerRequest());

        try {

            const response = await fetch("http://localhost:5000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            )

            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message);
            }
            console.log(data)
            dispatch(authActions.registerSuccess(data))
        }  catch (error){
            dispatch(authActions.registerFailure(error))
        }
    }
}