import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../Redux/Store/actions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

import { useHistory } from "react-router-dom";
import "./SignUp.css";
import userService from "../../services/user.service";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("The field is required"),
  email: Yup.string()
    .required("The field is required")
    .email("wrong format"),
  password: Yup.string().required()
});

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(actions.setUser(user));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(function SignUp(props) {
  const { setUser } = props;

  const [errorMsg, setErrorMsg] = useState(0);
  const history = useHistory();
  
  const handleSubmit = async values => {
    const newUser = await userService.createUser(values);
    if (newUser !== null) {
      await setUser({ user: newUser.user, token: newUser.token });
      await swal({
        title: "Registration was successful",
        text: "You've got a welcome email!",
        icon: "success",
        button: { text: "OK", className: "sweet-button" }
      });
      setErrorMsg(0);
      history.push("/showPictureOfDay");
    } else {
      history.push("/signUp");
      setErrorMsg(1);
    }
  };
  return (
    <div>
      <div className="m-4 p-1">
        <h2>Create account</h2>
      </div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Form className="container-fluid w-50">
            {errorMsg ? (
              <div className="alert alert-danger">
                An account with that email address already exists. Please login
                to continue.
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label>User name</label>
              <Field
                required
                type="text"
                name="name"
                className="form-control"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <Field
                required
                type="email"
                name="email"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <Field
                required
                type="password"
                name="password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="d-flex justify-content-end my-4">
              <div>
                Have an account? <Link to={"/"}>Log in now</Link>
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-dark w-100 p-2 " type="submit">
                Sign up
              </button>{" "}
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
});
