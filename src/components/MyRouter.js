import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import ResetPassword from "./resetPassword/ResetPassword";
import ShowPictureOfDay from "./showPictureOfDay/ShowPictureOfDay";
import Nvbar from "./nvBar/NvBar";
import MyPictures from "./myPictures/MyPictures";


function MyRouter() {
  
  return (
    <Router>
      {/* <Nvbar /> */}
      <div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          {/* <Route path="/">
            <Nvbar />
          </Route> */}

          <Route path="/resetPassword">
            <ResetPassword />
          </Route>
          <Route exact path="/showPictureOfDay">
            <ShowPictureOfDay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default MyRouter;
