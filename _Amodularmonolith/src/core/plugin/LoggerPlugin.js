import { createPlugin } from "./createPlugin.js";

export const LoggerPlugin = createPlugin({
  name: "logger",

  install({ on }) {
    on("started", () => {
      console.log("🚀 Frontend Framework started.");
    });

    on("stopped", () => {
      console.log("🛑 Frontend Framework stopped.");
    });
  },
});
