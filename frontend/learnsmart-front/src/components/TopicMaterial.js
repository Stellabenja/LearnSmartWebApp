import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class TopicMaterial extends Component {
    constructor(props){
        super(props); 
        this.state = { 
        links: [], 
        topic_name:""
        }; 
    }
    getMaterial(){
        const { match: { params } } = this.props;
	if(this.props){
        this.setState({topic_name:params.topic_name})
		try{
                axios.get(`http://localhost:5000/api/material/${params.topic_name}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                      }
                }
                )
                .then(res => {
                    this.setState({links: res.data , topic_name:params.topic_name});
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
                <div className="col-md-12 text-center mb-4 mt-3">
                <h2>View Related Lectures and Videos </h2>
                </div>
                <div className="col-md-12 text-center mb-4">
                    <h4>Or </h4>
                <Link to={`/quizbox/${this.state.topic_name}`}><button className="btn btn-yellow t-medium text-darkblue" >Skip and Take a quiz</button></Link>

                </div>
                <div className="col-md-12">
                    <div className="">
                        
                    </div>
                    <div class="card mb-5 mx-5">
                        <div class="card bg-light">
                            <div className="card-body  ml-3">
                            <button type="button" className="t-15 text-white btn btn-primary w-25 mb-2 disabled" >Lectures</button>
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