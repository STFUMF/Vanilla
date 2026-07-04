import { updateProps } from "./operations";

/**
 * Compares element properties
 * 
 * @param {object} previousNode
 * @param {object} nextNode
 * @param {number[]} path
 * @param {Array} operations
 */
export function compareProps(previousNode, nextNode, path, operations) {
    const previousProps = previousNode.props;
    const nextProps = nextNode.props;

    const changed = {};
    const removed = [];

    // Added or changed properties
    for (const key of Object.keys(nextProps)) {
        if (previousProps[key] !== nextProps[key]) {
            changed[key] = nextProps[key];
        }
    }

    // Removed properties
    for (const key of Object.keys(previousProps)) {
        if (!(key in nextProps)) {
            removed.push(key);
        }
    }

    if (
        Object.keys(changed).length === 0 &&
        removed.length === 0
    ) {
        return;
    }

    operations.push(
        updateProps(path, changed, removed)
    );
}