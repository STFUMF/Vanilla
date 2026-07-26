/**
 * Creates a stable identity for a component instance.
 *
 * Example:
 *
 * TodoItem: 1
 * TodoItem: 2
 * NoteItem:abc
 */

export function createComponentIdentity(node) {
  const componentName = node.component.name || "Anonymous";

  const key = node.options.key ?? "default";

  return `${componentName}:${key}`;
}
