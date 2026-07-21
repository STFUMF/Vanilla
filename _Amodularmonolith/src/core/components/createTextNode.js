import { TEXT_NODE_TYPE } from "./constants.js";

export function createTextNode(text) {
  assertText(text);

  return Object.freeze({
    nodeType: TEXT_NODE_TYPE,
    text,
  });
}

function assertText(value) {
  if (typeof value !== "string") {
    throw new TypeError("Text node content must be a string.");
  }
}
