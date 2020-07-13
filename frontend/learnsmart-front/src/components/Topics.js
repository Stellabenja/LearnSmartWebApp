import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default class Topics extends Component{
    constructor(props){
        super(props);
        this.state = { topicsCollection: [] };
    }
    componentDidMount() {
       // headers = { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer {}".format(token)}
        axios.get('http://localhost:5000/api/topics',
        {
            headers: {
            'Authorization':`Bearer ${localStorage.getItem('token')}` 
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
                    <Link to={`/topicmaterial/${data.name}`}> <button className="btn btn-yellow t-medium text-darkblue btn-topic"> {data.name} </button></Link>
                   </div>
        });
    }
    render(){
        return(
            <div className="container profil-container">
                <div className="row mt-5">
                {this.dataButton()}
                </div>
            </div>
        )
    }
   
    
}
