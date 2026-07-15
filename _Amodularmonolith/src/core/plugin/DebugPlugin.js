import { createPlugin } from "./createPlugin.js";

export const DebugPlugin = createPlugin({
  name: "DebugPlugin",

  install({ on }) {
    on("started", () => {
      console.log("🚀 Debug plugin started");
    });

    on("stopped", () => {
      console.log("🛑 Debug plugin  stopped.");
    });
  },
});
