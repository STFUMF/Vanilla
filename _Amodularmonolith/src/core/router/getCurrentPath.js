/**
 * Returns the current route path.
 * 
 * @returns {string}
 */
export function getCurrentPath() {
    const path = window.location.hash.slice(1);

    return path || "/";
}

