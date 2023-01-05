import { createContext, useState, useContext } from "react";
import { FnVoid, RootProps } from "../types";

export interface IConfirm {
  open: boolean;
  title?: string;
  subtitle?: string;
  leftBtnText?: string;
  rightBtnText?: string;
  onAction?: FnVoid;
}

interface IConfirmContext {
  confirm: IConfirm;
  onConfirm?: (info: IConfirm) => void;
  onCloseConfirm?: FnVoid;
}

export const ConfirmationContext = createContext({} as IConfirmContext);

export const useConfirm = () => useContext(ConfirmationContext);
const ConfirmProvider = ({ children }: RootProps) => {
  const [confirm, setConfirm] = useState<IConfirm>({
    open: false,
    title: "Delete",
    subtitle: "Are you sure!",
  });

  const onConfirm = (confirm: IConfirm) => {
    setConfirm((prev: IConfirm) => ({ ...prev, ...confirm }));
  };
  const onCloseConfirm = () => {
    setConfirm((prev: IConfirm) => ({ ...prev, open: false }));
  };
  return (
    <ConfirmationContext.Provider
      value={{ confirm, onConfirm, onCloseConfirm }}
    >
      {children}
    </ConfirmationContext.Provider>
  );
};

export default ConfirmProvider;
