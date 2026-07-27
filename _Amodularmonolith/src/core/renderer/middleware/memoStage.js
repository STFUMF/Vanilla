export function memoStage(next) {
  return function (node) {
    return next(node);
  };
}
