import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom'
export default class Profil extends Component {
    
  componentDidMount () {
    var check = localStorage.getItem( 'userName' ) || 1;
    if (check !== 1) {
      
    } else {
      const userObject = {
        userId: this.props.userID,
      };
      axios.post('http://localhost:5000/api/userData', userObject)
      .then((res) => {
          if (res.status === 200) {
              this.props.updateUserData(res.data.userData.username, res.data.userData.email)
            };
          console.log(res.data.userData.email)
          
      }).catch((error) => {
          console.log(error)
      });
    }
    
  }
  render() {
    var isLoggedIn = localStorage.getItem( 'isLoggedIn' ) || 1;
    var userName = localStorage.getItem( 'userName' ) || 1;
    var email = localStorage.getItem( 'email' ) || 1;
    console.log(email,userName)
        return (
          <div>
              
              {userName!==1 && 
                          <div>
                               <strong>Username: </strong> {userName}<br></br>
                               <strong>Email: </strong> {email}<br></br>
                          </div>
              }
              {userName===1 && isLoggedIn!==1 &&
                          <div>
                               <strong>Username: </strong>{this.props.userName}<br></br>
                               <strong>Email: </strong> {this.props.email}<br></br>
                          </div>
              }
          </div>
           
        );
      
      
  }
    
}
