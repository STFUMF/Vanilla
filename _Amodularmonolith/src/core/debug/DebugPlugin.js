import { createPlugin } from "../plugin/createPlugin.js";
import { DebugService } from "./DebugService.js";

export const DebugPlugin = createPlugin({
  name: "DebugPlugin",

  install({ getStore, getConfig, on }) {
    on("started", () => {
      DebugService.register("store", getStore());
      console.log("debug");
      DebugService.register("config", getConfig());
    });
  },
});
