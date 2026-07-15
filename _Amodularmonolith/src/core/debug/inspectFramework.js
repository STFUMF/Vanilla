import { DebugService } from "./DebugService.js";

export function inspectFramework(app) {
  console.group("Frontend");

  console.log(DebugService.inspect());

  console.groupEnd();
}
