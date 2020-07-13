import React, { Component } from "react";
import '../styles/Auth.css';
import '../styles/App.css';
import axios from 'axios';
import { Route, Redirect, Link} from 'react-router-dom';

export default class UploadPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list:[],
        }
    }

    componentDidMount() {
        var topic = localStorage.getItem( 'selectedTopic' ) || 1;

        if(topic===1) {
            topic = this.props.selectedTopic;
        }

        const topicName = {
            topicname: topic
        };
        console.log(topicName, this.props.uploadsListFilled);
        axios.post('http://localhost:5000/api/showUploads', topicName,
        { headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res.data[0]);
                this.props.fillUploadList(res.data);
                this.props.setUploadsListFilled();
            }    
            
            console.log(this.props.uploadsListFilled);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        var topicname = localStorage.getItem( 'selectedTopic' ) || 1;

        if(topicname===1) {
            topicname = this.props.selectedTopic;
        }

        this.state.list = this.props.uploadsList.map((data, i) => {
            return {id: data._id.$oid, topicname: data.topicname, typeofupload: data.typeofupload, link: data.link}
        });
        console.log( this.state.list);
        return (
             <div className="uploads-container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>{topicname}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 uploads">
                        <ul >
                            {this.state.list.map(item => (
                                <li key={item.id}>
                                    <span><Link className="uploadedLink" to="">{item.link}</Link></span>
                                </li>
                                
                            ))
                            }
                        </ul>
                    </div>
                </div>
                
             </div>   
                
            
        );
    }
}