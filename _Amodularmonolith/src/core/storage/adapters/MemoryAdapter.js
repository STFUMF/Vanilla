import { createStorageAdapter } from "../createStorageAdapter.js";

const storage = new Map();

export const MemoryAdapter = 
    createStorageAdapter({

        get(key){
            return storage.get(key) ?? null
        },

        set(key, value) {
            storage.set(key, value);
        },

        remove(key) {
            storage.delete(key);
        },

        clear() {
            storage.clear();
        },
    });