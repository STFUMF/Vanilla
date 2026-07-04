import { createDom } from "../../dom";

export function replaceHandler(context) {
    const dom = createDom(context.operation.node);

    context.node.replaceWith(dom);
}