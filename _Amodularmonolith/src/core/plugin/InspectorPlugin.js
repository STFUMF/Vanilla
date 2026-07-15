import { inspectFramework } from "../debug/inspectFramework.js";
import { createPlugin } from "./createPlugin.js";

export const InspectorPlugin = createPlugin({
  name: "InspectorPlugin",

  install({ on }) {
    on("started", () => {
      console.log("inspect");
      inspectFramework();
    });
  },
});
