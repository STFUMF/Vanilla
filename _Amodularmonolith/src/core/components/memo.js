import { shallowEqual } from "./shallowEqual.js";
export function memo(component, compare = shallowEqual) {
  console.log("Creating memo wrapper:", component.name);
  let previousProps = null;
  let previousResult = null;

  return function MemoizedComponent(props) {
    const isEqual = previousProps && compare(previousProps, props);

    console.log({
      previousProps,
      props,
      isEqual,
    });

    if (isEqual) {
      console.log("MEMO HIT");
      return previousResult;
    }
    console.log("MEMO miss");
    previousProps = props;
    previousResult = component(props);

    return previousResult;
  };

  MemoizedComponent.displayName = component.name;

  MemoizedComponent.isMemoized = true;

  return MemoizedComponent;
}
