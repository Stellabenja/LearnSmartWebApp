import React, { Component } from "react";
import axios from 'axios';
export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password:''
        }
    }
    onChangeUserName(e) {
        this.setState({ username: e.target.value })
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
            username: this.state.username,
            email: this.state.email,
            password:this.state.password
        };
        axios.post('http://localhost:5000/api/auth/signup', userObject)
        .then((res) => {
            this.props.updateUserData(this.state.username,this.state.email)
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ username: '', email: '', password:''})
    }
    render() {
        return (
    <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.onChangeUserName} className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.onChangePassword} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }
}