import classNames from "classnames";
import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { useToggle } from "../hooks/useToggle";
import Box from "./Box";
import Typography from "./Typegraphy";

/**
 * Modal
 * @returns
 */
type IModalProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  label?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
};

export type ModalRef = {
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

/**
 * Modal component
 */
const Modal = forwardRef<ModalRef, IModalProps>((props: IModalProps, ref) => {
  const refs = useRef<HTMLDivElement>(null);
  const { open, onClose, onOpen, onToggle } = useToggle();

  const { label, children } = props;

  useImperativeHandle(ref, () => ({ onClose, onOpen, onToggle }));
  useClickOutside(refs, onClose);

  const classes = classNames("modal fade", open && "show");

  return (
    <>
      <Box
        ref={refs!}
        className={classes}
        style={{ display: open ? "block" : "none" }}
      >
        <Box className="modal-dialog modal-dialog-centered">
          <Box className="modal-content">
            <Box className="modal-header">
              <Typography className="mb-0" variant="h6">
                {label}
              </Typography>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </Box>
            <Box className="modal-body">{children}</Box>
          </Box>
        </Box>
      </Box>
      {open && <Box className={classNames("modal-backdrop fade show")}></Box>}
    </>
  );
});

export default memo(Modal);
