import { useFormik } from "formik";
import Box from "../components/Box";
import Form from "../components/Form";
import Input from "../components/Input";
import Typography from "../components/Typegraphy";
import * as yup from "yup";
import Password from "../components/Password";
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
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validation,
      onSubmit: (values: IValues) => {
        console.log(values);
      },
    });
  return (
    <Form onSubmit={handleSubmit}>
      <Box className="auth-title">
        <Typography variant="h3">Sign in</Typography>
        <Typography variant="subtitle2">
          If you don't have an account, please click on
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
          />
        </Box>
        <Box className="mb-2">
          <Password
            name="password"
            startIcon="key"
            errors={errors}
            touched={touched}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Box>
      <Box></Box>
    </Form>
  );
};

export default Signin;
