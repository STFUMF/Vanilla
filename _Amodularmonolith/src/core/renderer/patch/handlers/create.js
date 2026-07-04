import { createDom } from "../../dom"
import { getNode } from "../getNode.js";

export function createHandler(context) {
    const { root, operation } = context;

    const parent = 
        operation.path.length === 0
            ? root
            : getNode(root, operation.path.slice(0, -1));

    const dom = createDom(operation.node);

    parent.appendChild(dom);
}