const scopeStack = [];

export function pushScope(scope) {
  scopeStack.push(scope);
}

export function popScope() {
  scopeStack.pop();
}

export function getActiveScope() {
  return scopeStack.at(-1) ?? null;
}
