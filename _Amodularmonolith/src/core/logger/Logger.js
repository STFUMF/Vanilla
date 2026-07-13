import { ConfigService } from "@core/config";

export const Logger = {
  debug(...args) {
    if (!ConfigService.isDebug()) {
      return;
    }

    console.log(...args);
  },

  warn(...args) {
    console.warn(...args);
  },

  error(...args) {
    console.error(...args);
  },
};
