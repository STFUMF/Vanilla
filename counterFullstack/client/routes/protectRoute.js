

export function protectRoute(store){
    const state = store.getState();

    const currentPage = window.location.pathname;

    const isLoginPage = currentPage.includes('login.html');
    const isRegisterPage = currentPage.includes('register.html');

    if (
        !state.auth.isAuthenticated &
        !isLoginPage &&
        !isRegisterPage
    ) {
        window.location.href = "login.html";
    }

    if (
        state.auth.isAuthenticated &&
        (isLoginPage || isRegisterPage)
    ) {
        window.location.href = 'index.html';
    }
}