
const listeners = new Map();

export function subscribe(event, listener) {

    if (!listeners.has(event)) {
        listeners.set(event, []);
    }

    listeners.get(event).push(listener);

    return () => {

        const events = listeners.get(event);
        if (!events) return;
        
        const index = events.indexOf(listener);

        if (index >= 0) {
            events.splice(index, 1);
        }
    };
}

export function publish(event, payload) {

    const events = listeners.get(event);

    if (!events) return;

    events.forEach(listener => listener(payload));
}