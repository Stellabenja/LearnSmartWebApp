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
                                    <Link to="/share-data" className="nav-link text-white t-18" id="updloadFileLink">Upload</Link>
                                </li>
                               
                                <li className="nav-item float-right">
                                    <Link to="/status" className="nav-link text-white t-18" id="updloadFileLink">Status 
                                        <span className="mr-5">
                                        <svg width="3em" height="2.5em" viewBox="0 0 30 30" className="bi bi-bar-chart-line-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{position: "absolute"}}>
                                            <rect width="4" height="5" x="1" y="10" rx="1"/>
                                            <rect width="4" height="9" x="6" y="6" rx="1"/>
                                            <rect width="4" height="14" x="11" y="1" rx="1"/>
                                            <path fillRule="evenodd" d="M0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item float-right">
                                    <Link to="/logout" className="nav-link text-white t-18" id="loginLink">Logout</Link>
                                </li>
                                <li className="nav-item float-right">
                                    <Link to="/profil" className="nav-link text-white t-18" id="profilLink">
                                    <span className="mr-5">
                                        <svg width="3em" height="2.5em" viewBox="0 0 30 30" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{position: "absolute"}}>
                                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                        </svg>
                                    </span>
                                    </Link>
                                </li> 
                                 
                            </ul>
                        }
                        
                    
                </div>
            </nav>
        )}
}

