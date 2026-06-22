
export function loadState(){
    const saved = localStorage.getItem("APP_STATE");

    if (!saved) return undefined;

    return JSON.parse(saved);
}