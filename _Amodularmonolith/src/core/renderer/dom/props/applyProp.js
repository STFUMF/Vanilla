
/**
 * Applies a single property to a DOM element
 * 
 * @param {HTMLElement} element
 * @param {string} key
 * @param {unknown} value
 */

export function applyProp(element, key, value) {
    // Event handlers: onClick -> click
    if (key.startsWith("on") && typeof value === "function") {
        const event = key.slice(2).toLowerCase();
        element[`on${event}`] = value;
        return;
    }
    
    // Boolean DOM properties (disabled, checked, selected, etc.)
    if (typeof value === "boolean") {
        element[key] = value;
        return;
    }

    if (value == null) {
        return;
    }

    // Normal attributes
    element.setAttribute(key, String(value));
}