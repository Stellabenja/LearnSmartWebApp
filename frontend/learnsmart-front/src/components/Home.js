import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../styles/App.css';
class Home extends Component {
 
    render() {
        return (
            <Router>
                <div className="Home" class="bg-color bodyheigth">
                                
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 mt-5">
                                <h2 class="text-white">Learning easily with quizzes </h2>
                            </div>
                            <div class="col-lg-12 mt-5">
                            <Link to="/signup"><button class="btn btn-yellow t-medium" >create a FREE Account</button></Link>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
           
        );
    }
}
 
export default Home;