import { useFormik } from "formik";
import { memo, useEffect } from "react";
import { AppContent } from "../../util/AppContent";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Box from "../../components/Box";
import * as Yup from "yup";
import { useAppDispatch } from "../../hook";
import { skillService, ISkill } from "../../services/skill.services";
import { addSkill, updateSkill } from "../../store/actions/skill.action";

const validation = Yup.object().shape({
  title: Yup.string().required("Skill is required!"),
  description: Yup.string(),
});

type SkillFormProps<T> = React.FormHTMLAttributes<HTMLFormElement> & {
  data: T;
  onClose?: () => void;
  loading?: boolean;
};

/**
 * Skill form component
 * @returns
 */
const SkillForm = <T extends { _id?: string }>({
  onClose,
  loading,
  data,
  ...rest
}: SkillFormProps<T>) => {
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
    initialValues: skillService.getObject(),
    validationSchema: validation,
    onSubmit: (values: ISkill) => {
      onClose?.();
      if (values._id) {
        dispatch(updateSkill(values));
      } else {
        dispatch(addSkill(values));
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
        placeholder="Skill name"
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

export default memo(SkillForm);
