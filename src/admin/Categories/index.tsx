import Button from "../../components/Button";
import Grid from "../../components/Grid";
import PageTitle from "../../components/PageTitle";
import CategoryForm from "./CategoryForm";
import Modal, { ModalRef } from "../../components/Modal";
import { useEffect, useRef } from "react";
import { useConfirm } from "../../context/Confirmation";
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEditing } from "../../hooks/useEditing";
import { fetchCategory } from "../../store/actions/category.action";
import { selectCategory } from "../../store/reducers/category.reducer";
import { ActionStatus } from "../../types";
import { AppContent } from "../../util/AppContent";

const Categories = () => {
  const catRef = useRef<ModalRef>(null);
  const dispatch = useAppDispatch();
  const { categories, status } = useAppSelector(selectCategory);
  const { onConfirm } = useConfirm();

  // editing
  const { editData, onEditHandler } = useEditing({ data: categories });

  // action handler
  const actionHandler = (status: ActionStatus, data: any) => {
    switch (status) {
      case "active":
        break;
      case "inactive":
        break;
      case "edit":
        catRef.current?.onOpen();
        onEditHandler(data);
        break;
      case "delete":
        onConfirm?.({ open: true });
        break;
      default:
        new Error("Worng action");
        break;
    }
  };

  // fetch data from server
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategory());
    }
  }, [status, dispatch]);

  return (
    <>
      <PageTitle className="title-page">
        <Button onClick={catRef.current?.onOpen}>{AppContent.addText}</Button>
      </PageTitle>

      {/* Grid */}
      <Grid
        variant="striped"
        data={categories}
        hideColumns={["_id"]}
        onAction={actionHandler!}
      />

      {/* Add category */}
      <Modal label="Add category" ref={catRef!}>
        <CategoryForm
          data={editData!}
          loading={status === "loading" ? true : false}
          onClose={catRef.current?.onClose}
        />
      </Modal>
    </>
  );
};

export default Categories;
