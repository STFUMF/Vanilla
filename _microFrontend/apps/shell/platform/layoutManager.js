const slots = new Map();


export function initializedLayout(config) {

    slots.clear();

    Object.entries(config).forEach(([name, selector]) => {
        const element = document.querySelector(selector);

        if (!element) {
            throw new Error(
                `Layout slot "${name}" could not find "${selector}".`
            );
        }

        slots.set(name, element);
    })
}

/* 
    Registers a DOM element for a named slot.
*/
export function registerSlot(name, element) {
    if (!element) {
        throw new Error(`Cannot register slot "${name}". Element is null.`);
    }

    slots.set(name, element);
}

/* 
    Returns the DOM element for a slot.
*/

export function getSlot(name) {

    const slot = slots.get(name);

    if (!slot) {
        throw new Error(`Unknown slot "${name}".`);
    }

    return slot;
}

/**
 * Returns every registerd slot.
 */
export function getSlots() {
    return [...slots.entries()];
}