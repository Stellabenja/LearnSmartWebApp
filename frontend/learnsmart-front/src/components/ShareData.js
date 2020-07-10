import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import profilIcon from '../images/person.png';
import editIcon from '../images/edit-icon.png';
import { Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom'
export default class Profil extends Component {
    constructor(props){
        super(props)
        this.dataTopics = this.dataTopics.bind(this);

        this.state = {
           topicsCollection: [] 
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/topics')
            .then(res => {
                this.setState({ topicsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataTopics() {
        return this.state.topicsCollection.map((data, i) => {
            return <option key={i} value={data.name}>{data.name}</option>
        });
    }

    render() {
        return (
            <div className="auth-wrapper mt-5">
                <div className="auth-inner">
                    <form onSubmit={this.onSubmit}>
                        <h3>Add Lecture or Videos </h3>

                        <div className="form-group">
                            <label>Topic Name</label>
                            <select onChange={this.onChangeTopicName} value={this.state.topicName}>
                                <option value="true">select topic</option>
                                {this.dataTopics()}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Link to Video </label>
                            <input type="text" value={this.state.text} onChange={this.onChangeText} className="form-control" placeholder="Enter link" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Upload</button>
                    </form>
                </div>
        </div>
        )
    }
}    