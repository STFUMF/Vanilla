import { PerformanceProfiler } from "../performance/PerformanceProfiler.js";
import { shallowEqual } from "./shallowEqual.js";
export function memo(component, compare = shallowEqual) {
  let previousProps = null;
  let previousResult = null;

  return function MemoizedComponent(props) {
    const isEqual = previousProps && compare(previousProps, props);

    if (isEqual) {
      PerformanceProfiler.increment("memoHits");
      return previousResult;
    }
    PerformanceProfiler.increment("memoMisses");
    previousProps = props;
    previousResult = component(props);

    return previousResult;
  };

  MemoizedComponent.displayName = component.name;

  MemoizedComponent.isMemoized = true;

  return MemoizedComponent;
}
