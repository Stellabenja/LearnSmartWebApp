import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Route, Redirect, ReactDOM } from 'react-router-dom';

export default class TopicMaterial extends Component {
    constructor(props){
        super(props); 
        this.state = { 
        links: [], 
        
        }; 
    }
    getMaterial(){
        const { match: { params } } = this.props;
	if(this.props){
		try{
                axios.get(`http://localhost:5000/api/material/${params.topic_name}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                      }
                }
                )
                .then(res => {
                    this.setState({links: res.data });
                })
                .catch(function (error) {
                    console.log(error);
                })
            }catch(error){
                console.log(error);
            }
	}
    }
    componentDidMount() { 
        this.getMaterial()
       
    } 
    render(){
        return(
        <div className="container">
            <div className="row">
            <div className="col-md-12 text-center mb-4">
            <h2>Related Lectures and Videos </h2>
            </div>
                
                <div className="col-md-12">
                    <div className="">
                        
                    </div>
                    <div class="card mb-5 mx-5">
                                    <div class="card bg-light">
                                        <div className="card-body  ml-3">
                                        <button type="button" className="t-15 text-white btn btn-primary w-25 mb-2" >Lectures</button>
                                            <h2><span className="t-15">Title:<a href='#'>test....</a></span></h2>
                                        </div>
                                    </div>
                            </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                        <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                        </div>
                        <div className="col-md-6">
                        <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}