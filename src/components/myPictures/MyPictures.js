import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actions } from "../../Redux/Store/actions";
import { Carousel } from "react-bootstrap";
import pictureService from "../../services/pictures.service";

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    pictures: state.picturesReducer.pictures
  };
}
const mapDispatchToProps = dispatch => ({
  setPictures: pictures => {
    dispatch(actions.setPictures(pictures));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function MyPictures(props) {
  const { user, setPictures, pictures } = props;

  useEffect(async () => {
    const picturesList = await pictureService.getAllPictures(user.token);
    if (picturesList !== null) {
      await setPictures(picturesList.pictures);
    } else {
      //TODO
    }
  }, []);
  return (
    <div className="h-100">
      <Carousel className="h-100">
        {pictures.map((picture, i) => {
          return (
            <Carousel.Item
              key={i}
              interval={picture.media_type === "image" ? 2000 : 10000000}
              className="carousel1"
            >
              {picture.media_type === "image" ? (
                <img
                  className="d-block p-3 carousel1"
                  src={picture.url}
                  alt="error"
                />
              ) : (
                <iframe
                  className="d-block  w-100 p-3 h-50 carousel1"
                  src={picture.url}
                ></iframe>
              )}
              <Carousel.Caption>
                <h3>{picture.title}</h3>
                <p>{picture.explenation}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
});
