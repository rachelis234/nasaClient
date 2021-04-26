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
      // debugger;
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
  //   createUser = async userBody => {
  //     try {
  //       const response = axios.post(`${this.url}/createUser`, this.userBody);
  //       return response.data;
  //     } catch (err) {
  //       return err;
  //     }
  //   };
  getPictureOfTheDay = async token => {
    try {
      // debugger;
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
      // debugger;
      console.log(formData);
      // const response = axios.post(`${this.url}uploadPicture`, {
      //   headers: { Authorization: token, "content-type": "multipart/form-data" }
      // });
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

  // getColor = async (colorId) => {
  //   try {
  //     const response = await axios.get(`this.url${colorId}`);
  //     //   console.log(response.data.tasks);
  //     return response.data;
  //   } catch (err) {
  //     return err;
  //   }
  // };
}
export default new PictureService();
