import React, { Component } from "react";
import '../styles/Auth.css';
import '../styles/App.css';
import axios from 'axios';
import Select from 'react-select';
import {
    Card,
    CardBlock,
    CardFooter,
    CardTitle,
    CardText,
  } from 'react-bootstrap-card';

import { Route, Redirect, Link} from 'react-router-dom';
import ReactDOM from 'react-dom'

const uploadOptions = [
    { label: "Video", value: "video" },
    { label: "Web Page", value: "Web Page" },
    { label: "Other", value: "Other" },
  ];

export default class ShareData extends Component {
    _isMounted = false;

    constructor(props){
        super(props)
        this.dataTopics = this.dataTopics.bind(this);
        this.onChangeTopicName = this.onChangeTopicName.bind(this);
        this.onChangeTypeOfUpload = this.onChangeTypeOfUpload.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.showUploadForm = this.showUploadForm.bind(this);
        this.onSubmitUpload = this.onSubmitUpload.bind(this);

        this.state = {
           topicsCollection: [],
           topicName:'',
           typeOfUpload:'',
           link:'',
           showUploadForm: false,
           showUploadBtn: true,
        }
        
    }
    componentDidMount() {
        this._isMounted = true;

        axios.get('http://localhost:5000/api/topics',
        {
            headers: {
            'Authorization':`Bearer ${localStorage.getItem('token')}` 
          }
        }
        )
        .then(res => {
            this.setState({ topicsCollection: res.data });
            this.dataTopics()
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    onSubmitUpload(e) {
        e.preventDefault()
        console.log('in on submit')
        const userObject = {
            topicname: this.state.topicName,
            typeofupload: this.state.typeOfUpload,
            link: this.state.link
          };
        
        axios.post('http://localhost:5000/api/upload', userObject,{ headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(res => {
            this.setState({showUploadBtn:true, showUploadForm:false})
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    dataTopics() {
        return this.state.topicsCollection.map((data, i) => {
            return { label: data.name, value: data.name}
        });
    }
    onChangeTopicName(t) {
        this.setState({ topicName: t.value });
        console.log(t, this.state.topicName)
    }
    onChangeTypeOfUpload(t) {
        this.setState({ typeOfUpload: t.value });
    }
    onChangeLink(l) {
        this.setState({ link: l.target.value });
    }
    showUploadForm() {
        const options = this.dataTopics();
        return (
            <div className="auth-inner upload-form">    
                <form onSubmit={this.onSubmitUpload}>
                    <h3>Add Lecture or Videos </h3>

                    <div className="form-group">
                        <label>Topic</label>
                        <Select options={options} onChange={this.onChangeTopicName}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Type of Upload</label>
                        <Select options={uploadOptions} onChange={this.onChangeTypeOfUpload}/>
                    </div>
                    <div className="form-group">
                        <label>Upload </label>
                        <input type="text" value={this.state.link} onChange={this.onChangeLink} className="form-control" placeholder="Enter link" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Upload</button>
                </form>
            </div>
        );
    }
    showUploadsToATopic(e) {
       this.props.setSelectedTopic(e);
    }
    
    render() {
        if (this.props.selectedTopic!=='') {
            // redirect to profil if is logged in
            return (
                    <Redirect to = {{ pathname: "/showUploadPage" }} />
            );
        } else {

            return (
                <div className="uploads-container">
                    <div className="row">
                        <div className="col-md-2">
                            {this.state.showUploadBtn &&
                                <button className="btn btn-info t-medium text-white" onClick={() => 
                                    this.setState({showUploadForm: true, showUploadBtn: false}) }>
                                    Upload Content
                                </button>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mt-5 ">
                            {this.state.showUploadForm ? this.showUploadForm() : null}
                        </div>
                        <div className="col-md-1"></div>
                        <div className=" col-md-7 mt-5">
                            <div className="uploads">
                                <Card className="topic-card">
                                    <CardTitle>React</CardTitle>
                                    <CardBlock>
                                        
                                        <button className="btn btn-info t-medium text-white" value="React" onClick={() =>this.showUploadsToATopic('React')}>
                                            Related lectures or Videos
                                        </button>
                                        
                                    </CardBlock>
                                </Card>
                                <Card className="topic-card">
                                    <CardTitle>Dash</CardTitle>
                                    <CardBlock>
                                        <button className="btn btn-info t-medium text-white" value="Dash" onClick={() =>this.showUploadsToATopic('Dash')}>
                                            Related lectures or Videos
                                        </button>
                                    </CardBlock>
                                </Card>
                                <Card className="topic-card">
                                    <CardTitle>Flask</CardTitle>
                                    <CardBlock>
                                        <button className="btn btn-info t-medium text-white" value="Flask" onClick={() =>this.showUploadsToATopic('Flask')}>
                                            Related lectures or Videos
                                        </button>
                                    </CardBlock>
                                </Card>
                                <Card className="topic-card">
                                    <CardTitle>MongoDB</CardTitle>
                                    <CardBlock>
                                        <button className="btn btn-info t-medium text-white" value="Flask" onClick={() =>this.showUploadsToATopic('Flask')}>
                                            Related lectures or Videos
                                        </button>
                                    </CardBlock>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            )
        }
    }
}    