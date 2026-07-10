export function changed(a, b) {
  return (
    typeof a !== typeof b ||
    (typeof a === "string" && a !== b) ||
    a.type !== b.type
  );
}
