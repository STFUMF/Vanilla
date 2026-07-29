export function disposeComponent(instance) {
  instance.status = "disposed";
  instance.mounted = false;

  instance.observer?.dispose();
}
