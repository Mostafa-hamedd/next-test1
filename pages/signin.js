import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography, 
} from "@material-ui/core";
import Link from 'next/link'

import LockOpenIcon from "@material-ui/icons/LockOpen";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signin = ({ handleChange }) => {
  const poperStyle = {
    padding: 20,
    height: "72vh",
     margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "#5ac9fe " };
  const btnstyle = { margin: "8px 0" , backgroundColor: "#608daf " };
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please Enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <div>
      <Grid>
        <Paper style={poperStyle}>
          <Grid align="center">
            {/* <Avatar style={avatarStyle}>
              <LockOpenIcon />
            </Avatar> */}
            <h2>Sign In</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  placeholder="Enter Email"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="username" />}
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={FormControlLabel}
                  name="remember"
                  control={<Checkbox name="checkedB" color="primary" float="left" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnstyle}
                  fullWidth
                >
                  {props.isSubmitting ? "Loading" : "Sign In"}{" "}
                </Button>
                <Typography></Typography>
              </Form>
            )}
          </Formik>
          <Typography>
          <Link href="/">Forgot password ?</Link>
          </Typography> 
        </Paper> 
      </Grid>
    </div>
  );
};
export default Signin