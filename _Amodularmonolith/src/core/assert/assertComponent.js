import { invariant } from "./invariant.js";

export function assertComponent(component) {
  invariant(
    typeof component === "function",

    `Expected component to be a function. Received: ${typeof component}`,
  );
}
