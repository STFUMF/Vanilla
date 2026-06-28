export function loadState(){
    const saved = localStorage.getItem("my-app");

    if (!saved) return undefined;

    return JSON.parse(saved);
}