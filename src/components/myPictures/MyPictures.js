import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actions } from "../../Redux/Store/actions";
import pictureService from "../../services/pictures.service";
import { Carousel } from "react-bootstrap";

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
    console.log(picturesList);
    if (picturesList !== null) {
      await setPictures(picturesList.pictures);
      // console.log(pictureOfDay);
      console.log(pictures);
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
              className="h-100"
            >
              {picture.media_type === "image" ? (
                <img
                  className="d-block w-100 p-3 h-50"
                  src={picture.url}
                  alt="error"
                />
              ) : (
                <iframe
                  className="d-block  w-100 p-3 h-50"
                  
                  src={picture.url}
                ></iframe>
                // <div className="video-section">

                //   <video
                //     className="fullscreen-bg_video w-100 h-75 videoItem"
                //     controls="controls"
                //     loop
                //     autoPlay
                //     muted
                //     style={{ width: "400px", height: "400px" }}
                //   >
                //     <source src={picture.url} type="video/mp4"></source>
                //   </video>
                // </div>
              )}
              <Carousel.Caption>
                <h3>{picture.title}</h3>
                <p>{picture.explenation}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      {/* <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://apod.nasa.gov/apod/image/2104/GalacticCore_SpitzerSchmidt_960.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://apod.nasa.gov/apod/image/2104/CenA_SofiaPlusB_960.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.youtube.com/embed/zIqG42AD4Gw?rel=0"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
    </div>
  );
});
