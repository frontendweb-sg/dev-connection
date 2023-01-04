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
  getById(id: string): Promise<AxiosResponse<T>>;
  create(body: T): Promise<AxiosResponse<T>>;
  update(body: T): Promise<AxiosResponse<T>>;
  deleted(id: string): Promise<AxiosResponse<T>>;
}
