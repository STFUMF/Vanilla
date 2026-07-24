export function createEffectManager() {
  const effects = [];

  return {
    register(effect) {
      effects.push({
        callback: effect.callback,
        deps: effect.deps,
        previousDeps: undefined,
        cleanup: null,
      });
    },

    flush() {
      for (const effect of effects) {
        const changed =
          !effect.previousDeps ||
          effect.deps.some((dep, i) => dep !== effect.previousDeps[i]);

        if (!changed) {
          continue;
        }

        effect.cleanup?.();
        effect.cleanup = effect.callback() ?? null;

        effect.previousDeps = [...effect.deps];
      }
    },

    clear() {
      for (const effect of effects) {
        effect.cleanup?.();
      }

      effects.length = 0;
    },
  };
}
