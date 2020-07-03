import React, { Component } from "react";
import axios from 'axios';
export default class AddTopic extends Component{
    constructor(props){
        super(props)
        this.onChangeTopicName = this.onChangeTopicName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           topicName: '',
        }
    }
    onChangeTopicName(e) {
        this.setState({ topicName: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const topicObject = {
            name: this.state.topicName,
        };
        axios.post('http://localhost:5000/api/topics', topicObject,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
        })
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ topicName: ''})
    }
    render() {
        return (
    <div className="auth-wrapper mt-5">
        <div className="auth-inner">
            <form onSubmit={this.onSubmit}>
                <h3>enter Topicname</h3>

                <div className="form-group">
                    <label>Topic Name</label>
                    <input type="topicName" value={this.state.topicName} onChange={this.onChangeTopicName} className="form-control" placeholder="Enter topicName" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
        </div>
        </div>
        );
    }
}