import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions } from "../../Redux/Store/actions";
import pictureService from "../../services/pictures.service";
import { Button, Collapse } from "react-bootstrap";
import "./ShowPictureOfDay.css";

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    pictureOfDay: state.picturesReducer.pictureOfDay
  };
}
const mapDispatchToProps = dispatch => ({
  // setPictureOfDay: picture => {
  //   dispatch(actions.setPictureOfDay(picture));
  // }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ShowPictureOfDay(props) {
  const { user } = props;
  const [pictureOfDay, setPictureOfDay] = useState({});
  // const history = useHistory();
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    const picture = await pictureService.getPictureOfTheDay(user.token);
    console.log(picture);
    if (picture !== null) {
      // await setPictureOfDay(picture);
      // console.log(pictureOfDay);
      await setPictureOfDay(picture);
      console.log(pictureOfDay);
    } else {
      //TODO
    }
  }, []);
  return (
    <div className="d-block justify-content-center align-items-center h-75  mx-auto">
      <h2 className="m-3">
        Here is the Astronomy Image that will make your day{" "}
      </h2>
      {/* <h3>{pictureOfDay.title}</h3> */}

      {Object.keys(pictureOfDay).length > 0 ? (
        <div className="d-block justify-content-center align-items-center h-75">
          <div style="height:100px" className="h-100"
            // className="d-flex flex-column justify-content-center align-items-center  w-75 h-100 p-4"
            style={{ border: "2px solid black", borderRadius: "10px" }}
          >
            {pictureOfDay.media_type === "image" ? (
              <img
                style={{ borderRadius: "10px" }}
                className="w-100 "
                src={pictureOfDay.url}
                title={pictureOfDay.title}
                alt="no image"
              />
            ) : (
              <iframe style={{ height: "75%" }} src={pictureOfDay.url}></iframe>
            )}
            <Button
              className="w-100"
              variant="outline-dark"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </Button>{" "}
          </div>

          <Collapse in={open}>
            <div id="example-collapse-text">{pictureOfDay.explanation}</div>
          </Collapse>
        </div>
      ) : (
        <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
      )}
    </div>
  );
});
