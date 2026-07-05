/**
 * Navigates to a path.
 * 
 * @param {string} path
 */
export function navigate(path) {
    window.location.hash = path;
}