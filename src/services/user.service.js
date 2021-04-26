import React, { Component } from "react";
import axios from "axios";
class UserService extends Component {
  constructor(props) {
    super(props);
    this.url = process.env.REACT_APP_SERVICE_URI
      ? `${process.env.REACT_APP_SERVICE_URI}users/`
      : "http://localhost:3000/users/";
  }
  //   getAllColors = async () => {
  //     try {
  //       const response = await axios.get(this.url);
  //       // console.log(response.data.colors);
  //       return response.data.colors;
  //     } catch (err) {
  //       return err;
  //     }
  //   };
  createUser = async userBody => {
    try {
      const response = await axios.post(`${this.url}createUser`, userBody);
      if (response.status === 200) {
        return response.data;
      } else throw new Error(response.data);
    } catch (err) {
      return null;
    }
  };
  getUser = async user => {
    try {
      const response = await axios.post(`${this.url}login`, user);
      if (response.status === 200) {
        return response.data;
      } else throw new Error(response.data);
    } catch (err) {
      return null;
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
export default new UserService();
