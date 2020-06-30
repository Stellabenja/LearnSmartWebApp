import React , { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login.js";
import '../../styles/App.css';
export default class Header extends Component{
    render(){
        return ( 
            <Router> 
            <nav className="navbar navbar-expand-lg navbar-light bgnav-color ">
                <a className="navbar-brand text-white"  href="#">Learnsmart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                        <Link className="nav-link text-white t-18" to="/">Home</Link>
                            
                        </li>
                        <li className="nav-item float-right">
                        <Link className="nav-link text-white t-18" to="/sign-in">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
          </Router>
        )}
}
