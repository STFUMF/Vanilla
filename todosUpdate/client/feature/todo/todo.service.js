
const STORAGE_KEY = "todos";

export const todoService = {
    getAll() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    },

    save(todos){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};