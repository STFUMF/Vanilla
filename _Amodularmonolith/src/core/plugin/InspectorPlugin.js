import { createPlugin } from "./createPlugin.js";

export const InspectorPlugin = createPlugin({
  name: "InspectorPlugin",

  install({ inspect, on }) {
    on("started", () => inspect());
  },
});
