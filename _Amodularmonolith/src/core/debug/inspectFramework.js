import { DebugService } from "./DebugService.js";

export function inspectFramework() {
  console.group("Frontend");

  console.log(DebugService.inspect());

  console.groupEnd();
}
