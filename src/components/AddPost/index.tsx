import { useFormik } from "formik";
import { IPost, postService } from "../../services/post.services";
import Form from "../Form";

import Col from "../Col";
import Typography from "../Typegraphy";
import Box from "../Box";
import Modal, { ModalRef } from "../Modal";
import Row from "../Row";
import Avatar from "../Avatar";
import { memo, useEffect, useRef } from "react";
import Textarea from "../Textarea";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import IconButton from "../IconButton";
import PhotoEditor from "./PhotoEditor";
import { useFocus } from "../../hooks/useFocus";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchCategory } from "../../store/actions/category.action";
import { selectCategory } from "../../store/reducers/category.reducer";
import { PostStatus } from "../../util";

/**
 * Add post component
 * @returns
 */

const AddPost = () => {
  const modelRef = useRef<ModalRef>(null);
  const modalImgRef = useRef<ModalRef>(null);
  const inpRef = useFocus<HTMLTextAreaElement>();

  const { status, categories } = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  const {
    values,
    setValues,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: postService.getObject(),
    onSubmit: (values: IPost) => {
      console.log("values", values);
    },
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategory());
    }
  }, [dispatch, status]);

  useEffect(() => {
    setValues((prev) => ({ ...prev, category: categories[0] }));
  }, [categories, setValues]);

  const image = values.image ? URL.createObjectURL(values.image as any) : "";

  return (
    <Box className="post-add">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={2}>
            <Avatar size="sm" />
          </Col>
          <Col sm={10}>
            <Select
              label="Hello world"
              name="category"
              startIcon="home"
              options={[1, 2, 3, 4, 5, 6]}
            />
            <Select
              name="category"
              options={categories}
              setFieldValue={setFieldValue}
            />
            {/* <MonacoEditor value={values.description} /> */}
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

            {values.image && (
              <Box className="post-add-media">
                <Box className="media-item">
                  <IconButton
                    onClick={() => setFieldValue("image", "")}
                    icon="times"
                  />
                  <img src={image} alt="" />
                </Box>
              </Box>
            )}
          </Col>
          <Col sm={12} className="mt-2">
            <Row className="d-flex align-items-center">
              <Col md={6}>
                <ul className="nav nav-inline">
                  <li className="nav-item">
                    <IconButton
                      onClick={modalImgRef.current?.onOpen}
                      icon="image"
                      color="info"
                    />
                  </li>
                  <li className="nav-item">
                    <IconButton icon="video" color="warning" />
                  </li>
                  <li className="nav-item">
                    <IconButton icon="calendar" color="danger" />
                  </li>
                  <li className="nav-item">
                    <IconButton icon="code" color="secondary" />
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <Select options={PostStatus} />
              </Col>
              <Col md={3}>
                <Button type="submit" block>
                  Save
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>

      <Modal label="Add post photo" ref={modalImgRef}>
        <PhotoEditor
          onClose={modalImgRef.current?.onClose!}
          onChange={setFieldValue}
          value={values.image}
        />
      </Modal>
    </Box>
  );
};

export default memo(AddPost);
