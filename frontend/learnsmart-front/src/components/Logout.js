import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom'
export default class Logout extends Component {
  //_isMounted = false;

  constructor(props){
    super(props)
    this.state = {
        //redirect: false
    }
  }

  
  removeItemsFromLocalStorage() {
    this.props.changeStatus(false, 1);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userID');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('token')
    
  }
    componentDidMount() {
      //this._isMounted = true;
      this.removeItemsFromLocalStorage();
        axios.get('http://localhost:5000/api/auth/logout',
        {
            headers: {
            'Authorization':`Bearer ${localStorage.getItem('token')}`
          }
        }
        )
            .then(res => {
                console.log(res.data);
                //console.log(this._isMounted);
                if (res.status === 200) {
                  this.props.redirectPage(true);
                  
                };
                /*if (this._isMounted) {
                  
                  console.log(this.state.redirect);
                }*/
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    /*componentWillUnmount() {
      this.setState = (state,callback)=>{
        return;
      };
    }*/

    render() {
     // this.removeItemsFromLocalStorage();
      console.log(this.props.redirect);
        if (this.props.redirect) {
          console.log(this.props.redirect);
          return (
            <Redirect to = {{ pathname: "/sign-in" }} />
          );
        } else{
          return <Redirect to = {{ pathname: "/" }} />
        }
        
    }
}
/*export default class Logout extends Component {

    render() {
        const { redirect } = this.state;
        if (redirect) {
        //return <Redirect to='/sign-in'/>;
        }
        return(<div>LOGOUT</div>) 
    }
} */

