import React, { Component } from "react";
import axios from "axios";
class PictureService extends Component {
  constructor(props) {
    super(props);
    this.url = process.env.REACT_APP_SERVICE_URI
      ? `${process.env.REACT_APP_SERVICE_URI}pictures/`
      : "http://localhost:3000/pictures/";
  }
  getAllPictures = async (token) => {
    try {
      const response = await axios.get(`${this.url}getAllPictures`, {
        headers: { Authorization: token }
      });
      if (response.status === 200) {
        return response.data;
      } else throw new Error(response.data);
    } catch (err) {
      return null;
    }
  };
  getPictureOfTheDay = async token => {
    try {
      const response = await axios.get(`${this.url}getPictureOfDay`, {
        headers: { Authorization: token }
      });
      if (response.status === 200) {
        return response.data.parsedData;
      } else throw new Error(response.data);
    } catch (err) {
      return null;
    }
  };
  uploadePicture = async (formData,token) => {
    try {
      console.log(formData);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token
        }
      };
        const response = await axios.post(`${this.url}uploadPicture`, formData, 
        config
      );
      if (response.status === 200) {
        return response.data;
      } else throw new Error(response.data);
    } catch (err) {
      throw err;
    }
  };
}
export default new PictureService();
