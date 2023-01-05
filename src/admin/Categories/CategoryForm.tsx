import { useFormik } from "formik";
import { memo, useEffect } from "react";
import { categoryService, ICategory } from "../../services/category.services";
import { AppContent } from "../../util/AppContent";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import Box from "../../components/Box";
import * as Yup from "yup";
import { useAppDispatch } from "../../hook";
import {
  addCategory,
  updateCategory,
} from "../../store/actions/category.action";

const validation = Yup.object().shape({
  title: Yup.string().required("Category is required!"),
  description: Yup.string(),
});

type CategoryFormProps<T> = React.FormHTMLAttributes<HTMLFormElement> & {
  data: T;
  onClose?: () => void;
  loading?: boolean;
};

/**
 * Category form component
 * @returns
 */
const CategoryForm = <T extends { _id?: string }>({
  onClose,
  loading,
  data,
  ...rest
}: CategoryFormProps<T>) => {
  const dispatch = useAppDispatch();

  const {
    values,
    errors,
    touched,
    handleBlur,
    setValues,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: categoryService.getObject(),
    validationSchema: validation,
    onSubmit: (values: ICategory) => {
      onClose?.();
      if (values._id) {
        dispatch(updateCategory(values));
      } else {
        dispatch(addCategory(values));
      }
    },
  });

  useEffect(() => {
    if (data?._id) {
      setValues((prev) => ({ ...prev, ...data }));
    }
  }, [data, setValues]);

  return (
    <Form onSubmit={handleSubmit} {...rest}>
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
        <Button onClick={onClose} className="me-2">
          {AppContent.cancelText}
        </Button>
        <Button loading={loading} type="submit">
          {AppContent.addText}
        </Button>
      </Box>
    </Form>
  );
};

export default memo(CategoryForm);
