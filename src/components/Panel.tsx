import classNames from "classnames";
import Box from "./Box";

type IColor = "gray" | "white";
type IPanelProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  color: IColor;
} & typeof defaultProps;

const defaultProps = {
  color: "white",
};

/**
 * Panel component
 * @param param0
 * @returns
 */
const Panel = ({ children, color, ...rest }: IPanelProps) => {
  const classes = classNames("panel", { ["panel-" + color]: color });
  return (
    <Box className={classes} {...rest}>
      {children}
    </Box>
  );
};

Panel.defaultProps = defaultProps;
export default Panel;
