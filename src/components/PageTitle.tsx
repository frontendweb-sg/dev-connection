import classNames from "classnames";
import { upperFirst } from "lodash";
import { useLocation } from "react-router-dom";
import Box from "./Box";
import Typography from "./Typegraphy";

/**
 * Page title
 * @returns
 */
type PageProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title?: string;
  subtitle?: string;
};
const PageTitle = ({
  title,
  subtitle,
  children,
  className,
  ...rest
}: PageProps) => {
  const { pathname } = useLocation();
  const routes = pathname.split("/").filter((item) => item);

  const name = title
    ? title
    : routes[routes.length - 1] === "admin"
    ? "Dashbaord"
    : upperFirst(routes[1]);
  const subname = subtitle ? subtitle : "Welcome to " + name.toLowerCase();

  const classes = classNames(
    "title d-flex align-items-center justify-content-between",
    className
  );
  return (
    <Box className={classes} {...rest}>
      <Typography variant="h5">
        {name}
        {subname && (
          <Typography className="d-block" variant="caption">
            {subname}
          </Typography>
        )}
      </Typography>

      <Box>{children}</Box>
    </Box>
  );
};

export default PageTitle;
