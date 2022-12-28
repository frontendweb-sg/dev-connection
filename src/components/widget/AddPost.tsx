import { useFormik } from "formik";
import { IPost, postService } from "../../services/post.services";
import Form from "../Form";

import Col from "../Col";
import Typography from "../Typegraphy";
import Box from "../Box";
import Modal, { ModalRef } from "../Modal";
import Row from "../Row";
import Avatar from "../Avatar";
import { useRef } from "react";
import Textarea from "../Textarea";

/**
 * Add post component
 * @returns
 */
const AddPost = () => {
  const ref = useRef<ModalRef>(null);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: postService.getObject(),
      onSubmit: (values: IPost) => {
        console.log("values", values);
      },
    });

  return (
    <>
      <Box className="p-3 border rounded mb-3">
        <Typography variant="h6">Create Post</Typography>
        <Form className="row" onSubmit={handleSubmit}>
          <Row>
            <Col sm={1}>
              <Avatar size="sm" />
            </Col>
            <Col sm={11}>
              <Textarea name="description" value={values.description} />
            </Col>
          </Row>
        </Form>
      </Box>
      <Modal label="Create post" ref={ref}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        repudiandae et porro excepturi temporibus consequuntur possimus vel
        asperiores voluptatibus magni, a illo sequi similique? Ipsam molestias
        consectetur in sunt libero.
      </Modal>
    </>
  );
};

export default AddPost;
