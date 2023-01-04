import { useFormik } from "formik";
import { memo } from "react";
import { categoryService, ICategory } from "../../services/category.services";
import { AppContent } from "../../util/AppContent";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import Box from "../../components/Box";
import * as Yup from "yup";
/**
 * Category form component
 * @returns
 */

const validation = Yup.object().shape({
  title: Yup.string().required("Category is required!"),
  description: Yup.string(),
});
const CategoryForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: categoryService.getObject(),
      validationSchema: validation,
      onSubmit: (values: ICategory) => {
        console.log("values", values);
      },
    });

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="title"
        value={values.title}
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Category name"
      />
      <Textarea
        name="description"
        value={values.description}
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Description"
      />
      <Box className="d-flex align-items-center justify-content-end mt-2">
        <Button className="me-2">{AppContent.cancelText}</Button>
        <Button type="submit">{AppContent.addText}</Button>
      </Box>
    </Form>
  );
};

export default memo(CategoryForm);
