import { IconName } from "@fortawesome/fontawesome-svg-core";
import React, { createContext, ReactElement } from "react";
import { To } from "react-router-dom";
import { Direction } from "../types";

interface IDropdownContext {
  open: boolean;
  onOpen?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
  onClose?: () => void;
  onToggle?: () => void;
}

export type IDropdownProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title?: string;
  icon?: IconName;
  component?: ReactElement;
  direction?: Direction;
  bodyProps?: IDropdownBodyProps;
  btnProps?: IDropdownButtonProps;
} & typeof dropdownDefaultProps;

export const dropdownDefaultProps = {
  direction: "right",
};

export type IDropdownBodyProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  direction?: Direction;
};

export type IDropdownButtonProps = {
  icon?: IconName;
  title?: string;
  component?: ReactElement;
};

export type IDropdownItemProps = React.HtmlHTMLAttributes<
  HTMLAnchorElement | HTMLDivElement
> & {
  to?: To;
  icon?: IconName;
  onClick?: () => void;
};

export const DropdownContext = createContext({} as IDropdownContext);
