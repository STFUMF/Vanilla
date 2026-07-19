export function createRenderScheduler(render) {
  let scheduled = false;

  return function scheduleRender() {
    if (scheduled) {
      return;
    }

    scheduled = true;

    queueMicrotask(() => {
      scheduled = false;
      render();
    });
  };
}
