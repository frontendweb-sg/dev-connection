import Box from "./Box";
import classNames from "classnames";
import { alertState, alertHide } from "../store/reducers/alert.reducer";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hook";

interface IAlertProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Snackbar component
 * @param param0
 * @returns
 */
const Snackbar: FC<IAlertProps> = ({ className, ...rest }) => {
  const { visible, message, color, size, direction } =
    useAppSelector(alertState);
  const dispatch = useAppDispatch();
  const classes = classNames(
    "alert alert-snackbar",
    {
      ["alert-" + color]: color,
      ["alert-" + size]: size,
      ["alert-" + direction]: direction,
    },
    className
  );
  return visible ? (
    <Box className={classes} role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => dispatch(alertHide())}
      ></button>
    </Box>
  ) : null;
};

Snackbar.defaultProps = {};
export default Snackbar;
