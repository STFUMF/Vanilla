export function classNames(...classes) {
  return classes.flat().filter(Boolean).join(" ");
}
