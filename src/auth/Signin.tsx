import Box from "../components/Box";
import Form from "../components/Form";
import Input from "../components/Input";
import Typography from "../components/Typegraphy";
import Password from "../components/Password";
import Button from "../components/Button";
import Icon from "../components/Icon";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Signin page
 * @returns
 */

interface IValues {
  email: string;
  password: string;
}

const validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const Signin = () => {
  const { onSignin } = useAuth();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "pkumar2@pythian.com",
        password: "Admin$1234@",
      },
      validationSchema: validation,
      onSubmit: (values: IValues) => {
        onSignin(values);
      },
    });

  return (
    <Form className="auth-form" onSubmit={handleSubmit}>
      <Box className="auth-title mb-3">
        <Typography variant="h3">Sign in</Typography>
        <Typography variant="subtitle2">
          If you don't have an account, please click on
          <Link to="/auth/signup" className="ms-1 text-danger">
            sing up
          </Link>
        </Typography>
      </Box>
      <Box className="auth-body">
        <Box className="mb-3">
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
        <Box className="mb-3">
          <Password
            name="password"
            startIcon="key"
            errors={errors}
            touched={touched}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="************"
          />
        </Box>
        <Box className="d-flex flex-column text-center">
          <Link className="text-danger link mb-3" to="/auth/forgot-password">
            <Icon icon="key" className="me-2" /> Forgot password
          </Link>
          <Button type="submit">Login</Button>
        </Box>
      </Box>
    </Form>
  );
};

export default Signin;
