import React, { Component } from "react";
import axios from "axios";
class UserService extends Component {
  constructor(props) {
    super(props);
    this.url = process.env.REACT_APP_SERVICE_URI
      ? `${process.env.REACT_APP_SERVICE_URI}users/`
      : "http://localhost:3000/users/";
  }
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
}
export default new UserService();
