import { applyOperation } from "./applyOperation.js";

/**
 * Applies a list of patch operations.
 * 
 * @param {object} context
 * @param {Node} context.root
 * @param {Array} context.operations
 */
export function patch(context) {
    const { root, operations } = context;
    

    for (const operation of operations) {
        applyOperation(root, operation);
    }
}