import { useFormik } from "formik";
import { IPost, postService } from "../../services/post.services";
import Form from "../Form";

import Col from "../Col";
import Typography from "../Typegraphy";
import Box from "../Box";
import Modal, { ModalRef } from "../Modal";
import Row from "../Row";
import Avatar from "../Avatar";
import { useEffect, useRef } from "react";
import Textarea from "../Textarea";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import Panel from "../Panel";
import { useFocus } from "../../hooks/useFocus";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchCategory } from "../../store/actions/category.action";
import { selectCategory } from "../../store/reducers/category.reducer";
import IconButton from "../IconButton";

/**
 * Add post component
 * @returns
 */

const AddPost = () => {
  const modelRef = useRef<ModalRef>(null);
  const inpRef = useFocus<HTMLTextAreaElement>();

  const { status, categories } = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: postService.getObject(),
    onSubmit: (values: IPost) => {
      console.log("values", values);
    },
  });

  useEffect(() => {
    if (status === "idle") dispatch(fetchCategory());
  }, [dispatch, status]);

  return (
    <>
      <Typography className="mb-3" variant="h6">
        Create Post
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={2}>
            <Avatar size="sm" />
          </Col>
          <Col sm={10}>
            <Select
              options={categories}
              name="category"
              value={values.category}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Share your posts..."
              name="description"
              value={values.description}
              onClick={modelRef.current?.onOpen}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={3}
              ref={inpRef}
              autoFocus
            />
          </Col>

          <Col sm={12} className="justify-content-end d-flex mt-2">
            <Row>
              <Col>
                <IconButton icon="camera" />
                <IconButton icon="video" />
                <IconButton icon="calendar" />
                <IconButton icon="code" />
              </Col>
              <Col>
                <Button type="submit">Save</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddPost;
