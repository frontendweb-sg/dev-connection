import { upperFirst } from "lodash";
import { memo } from "react";
import { ActionStatus, Color, Size, TableVariant } from "../../types";
import Table from "./Table";
import TableAction from "./TableAction";
import TableCell from "./TableCell";
import TableRow from "./TableRow";

type GridProps<T> = {
  data: T[];
  limit?: number;
  hideColumns?: string[];
  variant?: TableVariant;
  color?: Color;
  size?: Size;
  settings?: {
    active: true;
    inactive: true;
    editing: true;
    deleting: true;
  };
  onAction?: (type: ActionStatus, body: T) => void;
};

const Grid = <T extends unknown>({
  data,
  limit,
  hideColumns,
  variant,
  color,
  size,
  onAction,
  ...rest
}: GridProps<T>) => {
  const firstRow = data[0] ?? {};
  const columns = Object.keys(firstRow);
  const transformColumns = columns.filter(
    (item: string) => !hideColumns?.includes(item)
  );

  let element;
  if (data.length > 0) {
    element = (
      <tbody>
        {data.map((row: any, index) => {
          return (
            <TableRow key={index}>
              {transformColumns.map((col, index) => (
                <TableCell key={col + "_" + index} tag="td">
                  {row[col]}
                </TableCell>
              ))}
              <TableAction
                onAction={(status, value) => onAction?.(status, value)}
                data={row}
              />
            </TableRow>
          );
        })}
      </tbody>
    );
  }
  return (
    <Table variant={variant} color={color} size={size} {...rest}>
      <TableHeader cols={[...transformColumns, "Action"]} />
      {element}
    </Table>
  );
};

type TableHeaderProps = {
  cols?: string[];
};
const TableHeader = ({ cols }: TableHeaderProps) => {
  return (
    <thead>
      <TableRow>
        {cols?.map((col: string, index: number) => (
          <TableCell tag="th" key={index}>
            {upperFirst(col)}
          </TableCell>
        ))}
      </TableRow>
    </thead>
  );
};

export default memo(Grid);
