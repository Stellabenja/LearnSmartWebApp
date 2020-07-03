import React , { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App.js";
import '../../styles/App.css';

export default class Header extends Component{
    

    render(){
        var isLoggedIn = localStorage.getItem( 'isLoggedIn' ) || 1;
        console.log('hi',isLoggedIn);
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bgnav-color " >
                <a className="navbar-brand text-white t-24"  href="#">Learnsmart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white t-16" >Home</Link>
                            
                        </li>
                        {isLoggedIn !==1 || this.props.isLoggedIn && 
                            <li className="nav-item float-right">
                                <Link to="/logout" className="nav-link text-white t-20" id="loginLink">Logout</Link>
                            </li>
                        }
                        
                        {isLoggedIn ==1 || this.props.isLoggedIn && 
                            <li className="nav-item float-right">
                                <Link to="/sign-in" className="nav-link text-white t-20" id="loginLink">Login</Link>
                            </li>
                        }

                        {isLoggedIn !==1 || this.props.isLoggedIn && 
                            <li className="nav-item float-right">
                                <Link to="/profil" className="nav-link text-white t-20" id="loginLink">Profil</Link>
                            </li>
                        }
                        
                    </ul>
                </div>
            </nav>
        )}
}
