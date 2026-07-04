import { applyProps } from "../../dom/props";

/**
 * Applies a property update.
 * 
 * @param {object} context
 */
export function propsHandler(context) {
    const { node, operation } = context;

    for (const key of operation.removed) {
        node.removeAttribute(key);
    }

    applyProps(node, operation.props);
}