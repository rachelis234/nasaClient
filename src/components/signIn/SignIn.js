import React, { useState } from "react";
import { connect } from "react-redux";
import { actions } from "../../Redux/Store/actions";
// import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import userService from "../../services/user.service";
import "./SignIn.css";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("The field is required")
    .email("wrong format"),
  password: Yup.string().required()
});

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(actions.setUser(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function SignIn(props) {
  const { user, setUser } = props;
  const [errorMsg, setErrorMsg] = useState(0);
  const history = useHistory();
  
  const handleSubmit = async values => {
    const validUser = await userService.getUser(values);
    if (validUser !== null) {
      await setUser({ user: validUser.user, token: validUser.token });
      setErrorMsg(0);
      history.push("/showPictureOfDay");
    } else {
      history.push("/");
      setErrorMsg(1);
    }
  };

  return (
    <div>
      <div className="m-4 p-1">
        <h2>Log in to your account</h2>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Form className="container-fluid w-50">
            {errorMsg ? (
              <div className="alert alert-danger">
                Please provide a valid email and password.
              </div>
            ) : (
              ""
            )}

            <div className="form-group">
              <label>Email</label>
              <Field type="email" name="email" className="form-control" />
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
            <div className="d-flex justify-content-between mt-4 mb-4">
              <div className="form-group">
                <Link to={"/resetPassword"}>Forgot password?</Link>
              </div>
              <div>
                Don't have an account? <Link to={"/signUp"}>Sign Up</Link>
              </div>
            </div>
            <div className="form-group ">
              <button className="btn btn-dark w-100" type="submit">
                Sign In
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
});
