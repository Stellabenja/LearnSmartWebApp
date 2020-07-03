import React, { Component } from "react";
import { Redirect } from "react-router"
import '../styles/Auth.css';
import axios from 'axios';
export default class Logout extends Component {
constructor(props){
    super(props)
    this.state = {
        redirect: false
    }
}
    componentDidMount() {
        const headers={headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }}
        axios.post('http://localhost:5000/api/auth/logout',
        headers
        )
            .then(res => {
                console.log(res.data)
                 this.setState({ redirect: true })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
        return <Redirect to='/sign-in'/>;
        }
        return(<div>LOGOUT</div>) 
    }
}