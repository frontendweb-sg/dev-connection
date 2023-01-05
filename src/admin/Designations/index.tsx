import Modal, { ModalRef } from "../../components/Modal";
import { useEffect, useRef } from "react";
import { useConfirm } from "../../context/Confirmation";
import { useAppDispatch, useAppSelector } from "../../hook";
import { selectDesignation } from "../../store/reducers/designation.reducer";
import { useEditing } from "../../hooks/useEditing";
import {
  deleteDesignation,
  fetchDesignation,
} from "../../store/actions/designation.action";
import DesignationForm from "./DesignationForm";
import Grid from "../../components/Grid";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import { ActionStatus } from "../../types";
import { AppContent } from "../../util/AppContent";

const Designations = () => {
  const modalRef = useRef<ModalRef>(null);
  const dispatch = useAppDispatch();
  const { designations, status } = useAppSelector(selectDesignation);
  const { onConfirm } = useConfirm();

  const { editData, onEditHandler, onCancelEditing } = useEditing({
    data: designations,
  });

  // action handler
  const actionHandler = (status: ActionStatus, data: any) => {
    switch (status) {
      case "active":
        break;
      case "inactive":
        break;
      case "edit":
        modalRef.current?.onOpen();
        onEditHandler(data);
        break;
      case "delete":
        onConfirm?.({
          open: true,
          onAction: () => dispatch(deleteDesignation(data._id)),
        });
        break;
      default:
        new Error("Worng action");
        break;
    }
  };

  const onCancel = () => {
    modalRef.current?.onClose();
    onCancelEditing();
  };

  // fetch data from server
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDesignation());
    }
  }, [status, dispatch]);

  console.log("hi");

  return (
    <>
      <PageTitle className="title-page">
        <Button onClick={modalRef.current?.onOpen}>{AppContent.addText}</Button>
      </PageTitle>

      {/* Grid */}
      <Grid
        variant="striped"
        data={designations}
        hideColumns={["_id"]}
        onAction={actionHandler!}
      />

      {/* Add category */}
      <Modal label="Add category" ref={modalRef!}>
        <DesignationForm
          data={editData!}
          loading={status === "loading" ? true : false}
          onClose={onCancel}
        />
      </Modal>
    </>
  );
};

export default Designations;
