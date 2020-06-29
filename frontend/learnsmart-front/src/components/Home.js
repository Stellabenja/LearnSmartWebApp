import React, { Component } from 'react';
import '../styles/App.css';
class Home extends Component {
 
    render() {
        return (
            <div className="Home" class="bg-color bodyheigth">
                
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mt-5">
                            <h2 class="text-white">Learning easily with quizzes </h2>
                        </div>
                        <div class="col-lg-12 mt-5">
                        <button class="btn btn-yellow t-medium" type="submit">create a FREE Account</button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default Home;