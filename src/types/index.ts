import { AxiosResponse } from "axios";
import { ReactElement, ReactNode } from "react";

type TFlex = "flex" | "flex-inline";
type FlexDirection = "column" | "row";
export type TableVariant = "border" | "striped" | "hover";
export type Direction = "left" | "right" | "center";
export type Align = "left" | "right" | "center" | "justify";
export type Theme = "light" | "dark";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "block";
export type SliceStatus = "idle" | "loading" | "succeeded" | "failed";
export type ActionStatus = "edit" | "active" | "inactive" | "delete";
export type FnVoid = () => void;
export type Color =
  | "white"
  | "info"
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "dark"
  | "light"
  | "gray";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "label"
  | "span";
export interface RootProps {
  className?: string;
  children?: ReactNode | ReactElement;
}
export interface AppProps extends RootProps {
  flex?: TFlex;
  direction?: FlexDirection;
}

export interface IServices<T> {
  getAll(): Promise<AxiosResponse<T[]>>;
  create(body: T): Promise<AxiosResponse<T>>;
  update(body: T): Promise<AxiosResponse<T>>;
  deleted(id: string): Promise<AxiosResponse<T>>;
}
