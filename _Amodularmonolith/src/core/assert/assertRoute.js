import { invariant } from "./invariant.js";

export function assertRoute(route) {
  invariant(route, "Route is undefined.");

  invariant(typeof route.path === "string", "Route path must be a string.");
}
