type TableRowProps = React.HtmlHTMLAttributes<HTMLTableRowElement> & {};
/**
 * Table row component
 * @param param0
 * @returns
 */
const TableRow = ({ children, ...rest }: TableRowProps) => {
  return <tr {...rest}>{children}</tr>;
};

export default TableRow;
