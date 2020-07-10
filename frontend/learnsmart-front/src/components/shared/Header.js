import React , { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App.js";
import '../../styles/App.css';

export default class Header extends Component{
    

    render(){
        var isLoggedIn = localStorage.getItem( 'isLoggedIn' ) || 1;
        console.log(isLoggedIn);
        console.log(this.props.isLoggedIn)
        return ( 
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bgnav-color " >
                <a className="navbar-brand text-white t-24"  href="#">LearnSmart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav-item">
                    <Link to="/" className="nav-link text-white t-16" >Home</Link>
                </div>
                {(isLoggedIn ===1 && !this.props.isLoggedIn)&& 
                    <div className="nav-item float-right">
                        <Link to="/sign-in" className="nav-link text-white t-20" id="loginLink">Login</Link>
                    </div>
                }
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    

                        {(isLoggedIn !==1 || this.props.isLoggedIn) &&
                            <ul className="navbar-nav">
                                <li className="nav-item float-right">
                                    <Link to="/share-data" className="nav-link text-white t-20" id="updloadFileLink">Upload</Link>
                                </li>
                                <li className="nav-item float-right">
                                    <Link to="/profil" className="nav-link text-white t-20" id="profilLink">Profil</Link>
                                </li> 
                                <li className="nav-item float-right">
                                    <Link to="/logout" className="nav-link text-white t-20" id="loginLink">Logout</Link>
                                </li> 
                            </ul>
                        }
                        
                    
                </div>
            </nav>
        )}
}

