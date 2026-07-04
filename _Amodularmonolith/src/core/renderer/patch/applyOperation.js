import { OPERATION_TYPES } from "../diff/operations";

import { createHandler } from "./handlers/create.js";
import { removeHandler } from "./handlers/remove.js";
import { replaceHandler } from "./handlers/replace.js";
import { textHandler } from "./handlers/text.js";
import { propsHandler } from "./handlers/props.js";
import { createPatchContext } from "./createPatchContext.js";

/**
 * Applies a single operation.
 * 
 * @param {HTMLElement} root
 * @param {object} operation
 */
export function applyOperation(root, operation) {
    const context = createPatchContext(root, operation);

    switch (operation.type) {
        case OPERATION_TYPES.CREATE:
            return createHandler(context);

        case OPERATION_TYPES.REMOVE:
            return removeHandler(context);

        case OPERATION_TYPES.REPLACE:
            return replaceHandler(context);

        case OPERATION_TYPES.TEXT_UPDATE:
            return textHandler(context);

        case OPERATION_TYPES.PROPS_UPDATE:
            return propsHandler(context);

        default:
            throw new Error(
                `Unknown operation: ${operation.type}`
            );
    }
}