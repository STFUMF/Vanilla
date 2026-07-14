import { createPlugin } from "./createPlugin.js";

export const LoggerPlugin = createPlugin(
  "logger",

  ({ on }) => {
    on("started", () => {
      console.log("🚀 Framework started.");
    });

    on("stopped", () => {
      console.log("🛑 Framework stopped.");
    });
  },
);
