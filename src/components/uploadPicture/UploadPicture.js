import React, { useState } from "react";
import { connect } from "react-redux";
import pictureService from "../../services/pictures.service";
import "./UploadPicture.css";


function mapStateToProps(state) {
  // debugger;
  return {
    user: state.userReducer.user
    // pictureOfDay:state.pictureReducer.pictureOfDay
  };
}
export default connect(
  mapStateToProps,
  null
)(function ImageUpload(props) {
  const {user}=props;
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const _handleSubmit = e => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    // console.log("handle uploading-", file);
    const formData = new FormData();
    formData.append("file", file, file.name);
    // console.log(formData.get("file"));
    pictureService.uploadePicture(formData,user.token);
    // .then(()=>{
    //     console.log("success")
    // }).catch(err=>console.log("err in my upload"+err))
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

  // let { imagePreviewUrl } = imagePreviewUrl;
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
    <div className="previewComponent container justufy-content-center w-100">
      <div className="imgPreview row justify-content-center w-50">
        {$imagePreview}
      </div>
      {/* <div id="mainApp"></div> <div className="centerText"></div> */}
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
})
