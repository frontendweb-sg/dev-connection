import { useFormik } from "formik";
import { memo, useEffect } from "react";
import { AppContent } from "../../util/AppContent";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Box from "../../components/Box";
import * as Yup from "yup";
import { useAppDispatch } from "../../hook";
import {
  addDesignation,
  updateDesignation,
} from "../../store/actions/designation.action";
import {
  designationService,
  IDesignation,
} from "../../services/designation.services";

const validation = Yup.object().shape({
  title: Yup.string().required("Category is required!"),
  description: Yup.string(),
});

type DesignationFormProps<T> = React.FormHTMLAttributes<HTMLFormElement> & {
  data: T;
  onClose?: () => void;
  loading?: boolean;
};

/**
 * Category form component
 * @returns
 */
const DesignationForm = <T extends { _id?: string }>({
  onClose,
  loading,
  data,
  ...rest
}: DesignationFormProps<T>) => {
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
    initialValues: designationService.getObject(),
    validationSchema: validation,
    onSubmit: (values: IDesignation) => {
      onClose?.();
      if (values._id) {
        dispatch(updateDesignation(values));
      } else {
        dispatch(addDesignation(values));
      }
    },
  });

  useEffect(() => {
    if (data?._id) {
      setValues((prev) => ({ ...prev, ...data }));
    }
  }, [data, setValues]);

  console.log("hi", values);
  return (
    <Form onSubmit={handleSubmit} {...rest}>
      <Input
        name="title"
        value={values.title}
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Designation name"
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

export default memo(DesignationForm);
