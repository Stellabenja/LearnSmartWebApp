import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom'
export default class Logout extends Component {

    render() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userID');
      localStorage.removeItem('userName');
      localStorage.removeItem('email');
      return (
        <Redirect to = {{ pathname: "/" }} />
      );
    }
}
