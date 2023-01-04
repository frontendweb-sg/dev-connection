import classNames from "classnames";
import { memo } from "react";
import { Color, Size, TableVariant } from "../../types";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  variant?: TableVariant;
  color?: Color;
  size?: Size;
};

/**
 *
 * @param param0
 * @returns
 */
const Table = ({
  children,
  className,
  variant,
  color,
  size,
  ...rest
}: TableProps) => {
  const classes = classNames(
    "table",
    {
      ["table-" + variant]: variant,
      ["table-" + color]: color,
      ["table-" + size]: size,
    },
    className
  );

  return (
    <table className={classes} {...rest}>
      {children}
    </table>
  );
};

export default memo(Table);
