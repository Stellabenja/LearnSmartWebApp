import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class UserStatus extends Component {
    constructor(props){
        super(props); 
        this.state = { 
        visitedTopics: [], 
        
        }; 
    }
    getAllVisitedTopic(){
        axios.get('http://localhost:5000/api/score',
        {
            headers: {
            'Authorization':`Bearer ${localStorage.getItem('token')}` 
          }
        }
        )
            .then(res => {
                this.setState({ visitedTopics: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidMount(){
        this.getAllVisitedTopic()
    }
    dataButton() {
        return this.state.visitedTopics.map((data) => {
            return <div className="col-6 col-md-6 mt-4" >
                    <Link to={`/quizbox/${data}`}> <button className="btn btn-yellow t-medium text-darkblue btn-topic"> {data} </button></Link>
                   </div>
        });
    }
render(){

    return(
        <div className="container">
            <div className="row mt-5">
            <div className="col-md-12">
             <h2>Topics Already Visited </h2>
            </div>
            {this.dataButton()}
            </div>
        </div>
    )
}
}