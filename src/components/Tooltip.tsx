import classNames from "classnames";
import Box from "./Box";

type TooltipProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
};

const Tooltip = ({ children, title, className, ...rest }: TooltipProps) => {
  const classes = classNames("tooltips", className);
  return (
    <Box className={classes}>
      <Box className="tooltip">{title}</Box>
      {children}
    </Box>
  );
};

export default Tooltip;
