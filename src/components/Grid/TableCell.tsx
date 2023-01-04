import { createElement } from "react";

type Cell = "td" | "th";

type TableCellProps = React.HtmlHTMLAttributes<HTMLTableCellElement> & {
  tag?: Cell;
};
const TableCell = ({ tag, className, children, ...rest }: TableCellProps) => {
  return createElement(tag!, { ...rest }, children);
};

export default TableCell;
