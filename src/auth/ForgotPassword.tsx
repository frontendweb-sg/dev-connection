import Box from "../components/Box";
import Form from "../components/Form";
import Input from "../components/Input";
import Typography from "../components/Typegraphy";
import Button from "../components/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
interface IValues {
  email: string;
}
const validation = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPassword = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: validation,
      onSubmit: (values: IValues) => {
        console.log(values);
      },
    });
  return (
    <Form className="auth-form" onSubmit={handleSubmit}>
      <Box className="auth-title mb-3">
        <Typography variant="h3">Forgot password</Typography>
        <Typography variant="subtitle2">
          Back to
          <Link to="/auth" className="ms-1 text-danger">
            sign in
          </Link>
        </Typography>
      </Box>
      <Box className="auth-body">
        <Box className="mb-2">
          <Input
            name="email"
            type="email"
            value={values.email}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
            startIcon="envelope"
            placeholder="Email id"
          />
        </Box>
        <Box>
          <Button>Send</Button>
        </Box>
      </Box>
    </Form>
  );
};

export default ForgotPassword;
