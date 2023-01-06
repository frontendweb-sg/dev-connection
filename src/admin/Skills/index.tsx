import { useEffect, useRef } from "react";
import Button from "../../components/Button";
import Grid from "../../components/Grid";
import Modal, { ModalRef } from "../../components/Modal";
import PageTitle from "../../components/PageTitle";
import { useConfirm } from "../../context/Confirmation";
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEditing } from "../../hooks/useEditing";
import { deleteSkill, fetchSkills } from "../../store/actions/skill.action";
import { selectSkill } from "../../store/reducers/skill.reducer";
import { ActionStatus } from "../../types";
import { AppContent } from "../../util/AppContent";
import SkillForm from "./SkillForm";

const Skills = () => {
  const modalRef = useRef<ModalRef>(null);
  const dispatch = useAppDispatch();
  const { skills, status } = useAppSelector(selectSkill);
  const { onConfirm } = useConfirm();

  const { editData, onEditHandler, onCancelEditing } = useEditing({
    data: skills,
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
          onAction: () => dispatch(deleteSkill(data._id)),
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
      dispatch(fetchSkills());
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
        data={skills}
        hideColumns={["_id"]}
        onAction={actionHandler!}
      />

      {/* Add skill */}
      <Modal label="Add skill" ref={modalRef!}>
        <SkillForm
          data={editData!}
          loading={status === "loading" ? true : false}
          onClose={onCancel}
        />
      </Modal>
    </>
  );
};

export default Skills;
