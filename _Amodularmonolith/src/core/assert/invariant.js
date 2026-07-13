import { ConfigService } from "@core/config";

export function invariant(condition, message) {
  if (condition) {
    return;
  }

  throw new Error(
    ConfigService.isDev() ? `[Frontend] ${message}` : "Framework Error",
  );
}
