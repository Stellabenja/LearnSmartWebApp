import React , { Component } from 'react';
import '../../styles/App.css';
export default class Header extends Component{
    render(){
        return ( <nav class="navbar navbar-expand-lg navbar-light bgnav-color ">
            <a class="navbar-brand text-white"  href="#">Learnsmart</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                   
                    <li class="nav-item">
                        <a class="nav-link text-white t-18" href="#">Home</a>
                    </li>
                    <li class="nav-item float-right">
                        <a class="nav-link text-white t-18"  href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
        )}
}
