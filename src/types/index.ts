type TFlex = "flex" | "flex-inline";
type Direction = "column" | "row";

export type Align = "left" | "right" | "center" | "justify";
export type Theme = "light" | "dark";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "block";
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
export interface IProps {
  flex: TFlex;
  direction: Direction;
}
