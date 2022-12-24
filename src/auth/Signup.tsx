import Box from "../components/Box";
import Form from "../components/Form";
import Input from "../components/Input";
import Typography from "../components/Typegraphy";
import Password from "../components/Password";
import Button from "../components/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

interface IValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobile: string;
}

const validation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  mobile: yup.string().required(),
});

const Signup = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
      },
      validationSchema: validation,
      onSubmit: (values: IValues) => {
        console.log(values);
      },
    });
  return (
    <Form className="auth-form" onSubmit={handleSubmit}>
      <Box className="auth-title mb-3">
        <Typography variant="h3">Sign up</Typography>
        <Typography variant="subtitle2">
          If you have an account, please click on
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
        <Box className="mb-2">
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
        <Box className="d-flex flex-column mt-3">
          <Button>Sign up</Button>
        </Box>
      </Box>
    </Form>
  );
};

export default Signup;
