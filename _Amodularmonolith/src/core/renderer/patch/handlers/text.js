
/**
 * Applies a text update.
 * 
 * @param {object} context
 */
export function textHandler(context) {
    context.node.textContent = context.operation.value;
}

