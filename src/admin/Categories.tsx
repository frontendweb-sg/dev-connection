import { useEffect, useRef } from "react";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Modal, { ModalRef } from "../components/Modal";
import PageTitle from "../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../hook";

import { fetchCategory } from "../store/actions/category.action";
import { selectCategory } from "../store/reducers/category.reducer";
import CategoryForm from "./forms/CategoryForm";

const Categories = () => {
  const catRef = useRef<ModalRef>(null);
  const dispatch = useAppDispatch();
  const { categories, status } = useAppSelector(selectCategory);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategory());
    }
  }, [status, dispatch]);

  return (
    <>
      <PageTitle className="title-page">
        <Button onClick={catRef.current?.onOpen}>Add</Button>
      </PageTitle>

      <Grid
        variant="striped"
        data={[
          { id: 1, title: "Hello" },
          { id: 2, title: "Hello" },
        ]}
      />
      <Modal label="Add category" ref={catRef!}>
        <CategoryForm />
      </Modal>
    </>
  );
};

export default Categories;
