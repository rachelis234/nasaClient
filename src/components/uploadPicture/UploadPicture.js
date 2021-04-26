import React, { useState } from "react";
import { connect } from "react-redux";
import pictureService from "../../services/pictures.service";
import "./UploadPicture.css";

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}
export default connect(
  mapStateToProps,
  null
)(function ImageUpload(props) {
  const { user } = props;
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const _handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file, file.name);
    pictureService.uploadePicture(formData, user.token);
    };

  const _handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img src={imagePreviewUrl} />;
  } else {
    $imagePreview = (
      <div className="previewText text-center">
        Please select an Image for Preview
      </div>
    );
  }

  return (
    <div className="previewComponent container">
      <div className="row pt-5">
        <div className="col-3"></div>
        <div className="imgPreview">{$imagePreview}</div>
        <div className="col-3"></div>
      </div>

      <form
        className="row justify-content-center"
        onSubmit={e => _handleSubmit(e)}
      >
        <input
          className="fileInput"
          type="file"
          accept="image/*"
          onChange={e => _handleImageChange(e)}
        />
        <button
          className="submitButton"
          type="submit"
          onClick={e => _handleSubmit(e)}
        >
          Upload Image
        </button>
      </form>
    </div>
  );
});
