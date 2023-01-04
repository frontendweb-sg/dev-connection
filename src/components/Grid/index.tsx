import { upperFirst } from "lodash";
import { memo } from "react";
import { Color, Size, TableVariant } from "../../types";
import Table from "./Table";
import TableCell from "./TableCell";
import TableRow from "./TableRow";

type GridProps<T> = {
  data: T[];
  limit?: number;
  hideColumns?: string[];
  variant?: TableVariant;
  color?: Color;
  size?: Size;
};

const Grid = <T extends unknown>({
  data,
  limit,
  hideColumns,
  variant,
  color,
  size,
  ...rest
}: GridProps<T>) => {
  const firstRow = data[0] ?? {};
  const keys = Object.keys(firstRow);

  return (
    <Table variant={variant} color={color} size={size} {...rest}>
      <TableHeader cols={keys} />
      <tbody>
        {data.map((row: any, index) => {
          return (
            <TableRow key={index}>
              {keys.map((col, index) => (
                <TableCell key={col + "_" + index} tag="td">
                  {row[col]}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </tbody>
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
