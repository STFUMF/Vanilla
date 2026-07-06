
/**
 * Creates the runtime state for an event bus.
 * 
 * @returns {object}
 */
export function createEventBusState(){
    return {
        listeners: new Map(),
    };
}
