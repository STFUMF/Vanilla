import { ContributionTypes } from "../contribution/ContributionTypes.js";
import { createPlugin } from "../plugin/createPlugin.js";
import { thunk } from "./middleware/thunk.js";

export const StorePlugin = createPlugin({
  name: "store",

  install({ contribute }) {
    contribute(ContributionTypes.MIDDLEWARE, thunk);
  },
});
