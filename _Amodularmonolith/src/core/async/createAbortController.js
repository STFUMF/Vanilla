export function createAbortController() {
  const controller = new AbortController();

  return {
    signal: controller.signal,

    abort() {
      controller.abort();
    },

    get aborted() {
      return controller.signal.aborted;
    },
  };
}
