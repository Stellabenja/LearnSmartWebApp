import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Route, Redirect, ReactDOM } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password:'',
        }
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        
        const userObject = {
            email: this.state.email,
            password:this.state.password
        };
        axios.post('http://localhost:5000/api/auth/login', userObject)
        .then((res) => {
            if (res.status === 200) {
                this.props.changeStatus(true, res.data.id)
                
              };
            console.log(res.data)
            
        }).catch((error) => {
            console.log(error)
        });

        
    this.setState({ email: '', password:''})
    }
    render() {
        if (this.props.isLoggedIn) {
            // redirect to profil if is logged in
            return (
                    <Redirect to = {{ pathname: "/profil" }} />
            );
        } else {
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={this.onSubmit}>
                            <h3>Sign In</h3>
            
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" placeholder="Enter email" />
                            </div>
            
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" value={this.state.password} onChange={this.onChangePassword} className="form-control" placeholder="Enter password" />
                            </div>
            
                            {/* <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div> */}
            
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                    </div>
                    );
        }

    }

}

//ReactDOM.render(
//    <Login/>,
//    document.getElementById('loginLink')
//);