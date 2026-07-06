import { createStorageAdapter } from "../createStorageAdapter.js";

export const LocalStorageAdapter = 
    createStorageAdapter({

        get(key) {
            const value = localStorage.getItem(key);

            return value === null
                    ? null
                    : JSON.parse(value);
        },

        set(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },

        remove(key) {
            localStorage.removeItem(key);
        },

        clear() {
            localStorage.clear();
        },
    });