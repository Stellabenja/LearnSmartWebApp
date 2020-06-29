import React , { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login.js";
import '../../styles/App.css';
export default class Header extends Component{
    render(){
        return ( 
            <Router> 
            <nav class="navbar navbar-expand-lg navbar-light bgnav-color ">
                <a class="navbar-brand text-white"  href="#">Learnsmart</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    
                        <li class="nav-item">
                        <Link className="nav-link text-white t-18" to="/">Home</Link>
                            
                        </li>
                        <li class="nav-item float-right">
                        <Link className="nav-link text-white t-18" to="/sign-in">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
          </Router>
        )}
}
