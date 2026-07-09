export function createVariants(baseClass, options = {}) {
  const classes = [baseClass];

  for (const [name, value] of Object.entries(options)) {
    if (!value) continue;

    if (name === "variant") {
      classes.push(`${baseClass}-${value}`);
    } else {
      classes.push(`${baseClass}-${name}-${value}`);
    }
  }

  return classes;
}
