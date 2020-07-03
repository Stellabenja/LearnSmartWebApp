import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default class Topics extends Component{
    constructor(props){
        super(props);
        this.state = { topicsCollection: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/topics',
        {
            headers: {
            'Authorization': localStorage.getItem('token')
          }
        }
        )
            .then(res => {
                this.setState({ topicsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataButton() {
        return this.state.topicsCollection.map((data, i) => {
            return <div className="col-6 col-md-6 mt-4" key={i}>
                    <Link to={`/quiz/${data.name}`}> <button className="btn btn-yellow t-medium text-darkblue btn-topic"> {data.name} </button></Link>
                   </div>
        });
    }
    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                {this.dataButton()}
                </div>
            </div>
        )
    }
   
    
}
