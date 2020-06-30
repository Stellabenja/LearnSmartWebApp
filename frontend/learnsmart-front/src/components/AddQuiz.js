import React, { Component } from "react";
import axios from 'axios';
export default class AddTopic extends Component{
    constructor(props){
        super(props)
        this.state = { topicsCollection: [] };
        this.onChangeTopicName = this.onChangeTopicName.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           topicName: '',
           text: '',
           status:'',
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
    onChangeTopicName(e) {
        this.setState({ topicName: e.target.value })
    }
    onChangeText(e) {
        this.setState({ text: e.target.value })
    }
    onChangeStatus(e) {
        this.setState({ status: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()

        const quizObject = {
            topic_id: this.state.topicName,
            text:this.state.text,
            status:this.state.status

        };
        axios.post('http://localhost:5000/api/quiz', quizObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ topicName: '',text:'',status:''})
    }
    render() {
        return (
    <div className="auth-wrapper mt-5">
        <div className="auth-inner">
            <form onSubmit={this.onSubmit}>
                <h3>Create a quiz</h3>

                <div className="form-group">
                    <label>Topic Name</label>
                    <select onChange={this.onChangeTopicName} value={this.state.value}>
                        {this.dataTopics()}
                    </select>
                </div>
                <div className="form-group">
                    <label>Text</label>
                    <input type="text" value={this.state.text} onChange={this.onChangeText} className="form-control" placeholder="Enter quiz text" />
                </div>
                <div className="form-group">
                    <div className="">
                    <label >choose status</label>
                    <select onChange={this.onChangeStatus} value={this.state.value}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                       
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
        </div>
        </div>
        );
    }
}