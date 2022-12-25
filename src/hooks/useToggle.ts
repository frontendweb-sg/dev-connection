import { useState } from "react";

/**
 * use toggle hook
 * @returns
 */
export function useToggle() {
  const [open, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((prev) => !prev);

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
}
