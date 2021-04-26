import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default function ResetPassword() {
  const history = useHistory();

  const resetPassword = async () => {
    await swal({
      title: "",
      text: "You've got an email with your password",
      icon: "success",
      button: { text: "OK", className: "sweet-button" }
    });
    history.push("/");
  };
  return (
    <div className="w-100 h-100 mt-5">
      <div className="m-4 p-1">
        <h2>Reset your password</h2>
      </div>
      <div id="txt">
        <p>To reset your password, enter your email below and submit.</p>
        <p>An email will be sent to you with your password.</p>
      </div>
      <Form className="container-fluid w-50" onSubmit={resetPassword}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button className="btn btn-dark w-100" type="submit">
          reset password
        </Button>
      </Form>
    </div>
  );
}
