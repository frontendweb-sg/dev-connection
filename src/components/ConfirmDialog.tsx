import classNames from "classnames";
import Box from "./Box";
import Button from "./Button";
import Typography from "./Typegraphy";
import PropTypes from "prop-types";
import { IConfirm } from "../context/Confirmation";
import { Color, FnVoid, Size } from "../types";
import { AppContent } from "../util/AppContent";

type ConfirmDialogProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  confirm: IConfirm;
  onClose: FnVoid;
  size?: Size;
  color?: Color;
} & typeof defaultProps;

const defaultProps = {
  size: "sm",
  color: "primary",
};
/**
 * Confirm component
 * @returns
 */
const ConfirmDialog = ({
  confirm,
  onClose,
  children,
  style,
  size,
  className,
  ...rest
}: ConfirmDialogProps) => {
  const classes = classNames(
    {
      "modal fade": true,
      show: confirm.open,
      ["modal-" + size]: size,
    },
    className
  );

  const onCloseHandler = () => {
    confirm.onAction?.();
    onClose();
  };

  return (
    <>
      <Box
        className={classes}
        style={{ display: confirm.open ? "block" : "none", ...style }}
        {...rest}
      >
        <Box className="modal-dialog modal-dialog-centered">
          <Box className="modal-content">
            <Box className="modal-header">
              <Typography className="mb-0" variant="h6">
                {confirm.title}
              </Typography>
            </Box>
            <Box className="modal-body">
              {children ? children : confirm.subtitle}
            </Box>
            <Box className="modal-footer">
              <Button onClick={onClose}>{AppContent.cancelText}</Button>
              <Button onClick={onCloseHandler}>{AppContent.yesText}</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {confirm.open && (
        <Box className={classNames("modal-backdrop fade show")}></Box>
      )}
    </>
  );
};

ConfirmDialog.defaultProps = defaultProps;

ConfirmDialog.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  confirm: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ConfirmDialog;
