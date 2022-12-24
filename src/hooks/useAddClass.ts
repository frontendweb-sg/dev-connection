import { useEffect } from "react";

/**
 * Use add class hook
 * @param className
 * @param el
 */
export function useAddClass(className: string, el?: string) {
  useEffect(() => {
    const element = document.getElementById(el ?? "root");
    element?.classList.add(className);
    // if (element?.classList.contains(className)) {
    // }
    return () => {
      element?.classList.remove(className);
    };
  }, [className, el]);
}
