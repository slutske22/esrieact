import { useEffect, useRef } from "react";

/**
 * Like useEffect, but skips the initial mount.
 */
export function useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) {
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return effect();
  }, deps);
}
