import React, { Component } from "react";
import axios from 'axios';
export default class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = { quizCollection: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/quiz')
            .then(res => {
                this.setState({ quizCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataQuiz() {
        return this.state.quizCollection.map((data, i) => {
            return <div className="col-6 col-md-12 mt-4" key={i}>
                     <button className="btn btn-yellow t-medium text-darkblue"> {data.text} </button>
                   </div>
        });
    }
    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                {this.dataQuiz()}
                </div>
            </div>
        )
    }
   
    
}
