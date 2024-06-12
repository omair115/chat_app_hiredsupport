import { FC } from "react";
import CardContainerLayout from "../cardContainer/CardContainerLayout";
import {
  Heading,
  ForgotPassword,
  IconButton,
  SignUp,
  SignUpText,
  Container,
  OrText,
  Description,
} from "./RigthSection.styled";
import { createTheme, ThemeProvider, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomTextFields from "../Inputs/textfield/TextField";
import { useFormik } from "formik";
import CustomButton from "../Inputs/button/Button";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuth } from "../../data/redux/actions";

interface Props {
  children?: React.ReactNode;
}

const validate = (values: any) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be at least 8 characters";
  }

  return errors;
};

const RigthSection: FC<Props> = ({ children }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      toast.success("login successfull")
      dispatch(setUserAuth(values))
      history("./chat");
    },
  });

  return (
    <Container className="pt-6">
      <Heading className="hidden md:block">Good to see you again!</Heading>

      <Heading className="visible lg:hidden md:hidden">Voyager</Heading>

      <Description className="visible lg:hidden md:hidden mt-4">
        The power of AI at your fingertips
      </Description>

      <form onSubmit={formik.handleSubmit} className="w-1/2">
        <div className="mt-16">
          <CustomTextFields
            label="Email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mt-8 mb-4">
          <CustomTextFields
            label="Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>

        <Button variant="contained" className="mt-4" type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default RigthSection;
