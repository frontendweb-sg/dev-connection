import { FC } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

/**
 * Column component
 * @param param0
 * @returns
 */
const Col: FC<IProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  ...rest
}) => {
  const classes = classNames(
    {
      ["col-xs-" + xs]: xs,
      ["col-sm-" + sm]: sm,
      ["col-md-" + md]: md,
      ["col-lg-" + lg]: lg,
      ["col-xl-" + xl]: xl,
      col: !xs && !sm && !md && !lg && !xl,
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Col.defaultProps = {};
Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Col;
