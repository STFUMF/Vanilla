export function loadState(){
    try {
        const auth = localStorage.getItem('auth');

        return auth
            ? {
                auth: JSON.parse(auth)
                }
            : undefined;
    } catch {
        return undefined;
    }
}