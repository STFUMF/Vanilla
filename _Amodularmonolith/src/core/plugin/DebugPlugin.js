import { DebugService } from "../debug/DebugService.js";
import { createPlugin } from "./createPlugin.js";

export const DebugPlugin = createPlugin({
  name: "DebugPlugin",

  install({ getStore, getConfig }) {
    DebugService.register("store", getStore());
    console.log("debug");
    DebugService.register("config", getConfig());
  },
});
