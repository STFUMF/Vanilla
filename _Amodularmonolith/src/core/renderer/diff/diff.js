import { compareNode } from "./compareNode.js";

/**
 * Compares two UI trees.
 * 
 * @param {object|null} previousTree
 * @param {object|null} nextTree
 * @returns {Array}
 */

export function diff(previousTree, nextTree) {
    const operations = [];

    compareNode(previousTree, nextTree, [], operations);

    return operations;
}