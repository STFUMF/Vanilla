import { invariant } from "./invariant.js";

export function assertAction(action) {
  invariant(typeof action.type === "string", "Actions require a type.");
}
