import { createOperation } from "./createOperation.js";
import { OPERATION_TYPES } from "./types.js";

export function createNode(path, node) {
    return createOperation(OPERATION_TYPES.CREATE, {
        path, node,
    });
}

export function removeNode(path) {
    return createOperation(OPERATION_TYPES.REMOVE, {
        path,
    });
}

export function replaceNode(path, node) {
    return createOperation(OPERATION_TYPES.REPLACE, {
        path,
        node,
    });
}

export function updateText(path, value) {
    return createOperation(OPERATION_TYPES.TEXT_UPDATE, {
        path,
        value,
    });
}

export function updateProps(path, props, removed = []) {
    return createOperation(OPERATION_TYPES.PROPS_UPDATE, {
        path,
        props,
        removed
    });
}