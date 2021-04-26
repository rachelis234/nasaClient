import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { actions } from "../../Redux/Store/actions";

import MyPictures from "../myPictures/MyPictures";
import ImageUpload from "../uploadPicture/UploadPicture";
import ShowPictureOfDay from "../showPictureOfDay/ShowPictureOfDay";
import ResetPassword from "../resetPassword/ResetPassword";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import "./NvBar.css";

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
)(function Nvbar(props) {
  const {user,setUser}=props;
  const logOut=()=>{
    setUser(null);
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <p className="d-inline font1">Astronom</p>
              <p className="d-inline font2">Image</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link
                  as={Link}
                  to="/myPictures"
                  disabled={Object.keys(user.user).length > 0 ? false : true}
                >
                  Pictures Archives
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/uploadPicture"
                  disabled={Object.keys(user.user).length > 0 ? false : true}
                >
                  Upload picture
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/">Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/myPictures">
              <MyPictures />
            </Route>
            <Route exact path="/uploadPicture">
              <ImageUpload />
            </Route>
            <Route path="/resetPassword">
              <ResetPassword />
            </Route>
            <Route exact path="/showPictureOfDay">
              <ShowPictureOfDay />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
});
