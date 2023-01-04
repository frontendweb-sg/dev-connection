import { useEffect, useRef } from "react";

/**
 * use focus
 * @returns
 */
export function useFocus<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [ref]);

  return ref;
}
