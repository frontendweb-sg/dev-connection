import { useEffect } from "react";

/**
 * Click outside hook
 * @param ref
 * @param fn
 */
export function useClickOutside(ref: any, fn?: Function) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref?.current && !ref?.current.contains(event.target)) {
        fn?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fn]);
}
