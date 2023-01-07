import { useFormik } from "formik";
import { IPost, postService } from "../../services/post.services";
import { ICategory } from "../../services/category.services";
import Form from "../Form";

import Col from "../Col";
import Box from "../Box";
import Modal, { ModalRef } from "../Modal";
import Row from "../Row";
import Avatar from "../Avatar";
import { memo, useEffect, useRef } from "react";
import Textarea from "../Textarea";

import Select from "../Select";
import Button from "../Button";
import IconButton from "../IconButton";
import PhotoEditor from "./PhotoEditor";
import { useFocus } from "../../hooks/useFocus";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchCategory } from "../../store/actions/category.action";
import { selectCategory } from "../../store/reducers/category.reducer";
import * as yup from "yup";
import CodeEditor from "./CodeEditor";
import Tooltip from "../Tooltip";
import { addPost } from "../../store/actions/post.action";
/**
 * Add post component
 * @returns
 */

const schema = yup.object().shape({
  category: yup.object().required("Category is required"),
});
type AddPostProps = {
  onClose?: () => void;
};

const AddPost = ({ onClose }: AddPostProps) => {
  const modelRef = useRef<ModalRef>(null);
  const codeModalRef = useRef<ModalRef>(null);
  const modalImgRef = useRef<ModalRef>(null);
  const inpRef = useFocus<HTMLTextAreaElement>();

  const { status, categories } = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: postService.getObject(),
    validationSchema: schema,
    onSubmit: (values: IPost, { setSubmitting }) => {
      console.log("values", values);
      if (values._id) {
      } else {
        dispatch(addPost(values));
      }
      setSubmitting(false);
      onClose?.();
    },
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategory());
    }
  }, [dispatch, status]);

  const image = values.image ? URL.createObjectURL(values.image as any) : "";
  return (
    <Box className="post-add">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={2}>
            <Avatar size="sm" />
          </Col>
          <Col sm={10}>
            <Select<ICategory>
              name="category"
              errors={errors}
              touched={touched}
              options={categories}
              setFieldValue={setFieldValue}
              getOptionLabel={(value) => value.title}
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
                    <Tooltip title="Post code">
                      <IconButton
                        icon="code"
                        onClick={codeModalRef.current?.onOpen}
                        color="secondary"
                      />
                    </Tooltip>
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <Select
                  name="status"
                  onChange={handleChange}
                  options={["public", "custom", "only me", "friends"]}
                />
              </Col>
              <Col md={3}>
                <Button loading={isSubmitting} type="submit" block>
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

      <Modal label="Add code" ref={codeModalRef}>
        <CodeEditor
          onClose={modalImgRef.current?.onClose!}
          onChange={(value: any) => setFieldValue("code", value)}
          value={values.code}
        />
      </Modal>
    </Box>
  );
};

export default memo(AddPost);
