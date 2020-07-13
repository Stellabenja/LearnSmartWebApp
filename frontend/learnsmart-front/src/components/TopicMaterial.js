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
                axios.post('http://localhost:5000/api/showUploads',{"topicname":params.topic_name},
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
    dataLink() {
        return this.state.links.map((data, i) => {
            return <div key={i}>
                {data.typeofupload !== "video" && <h2><span className="t-15">Lecture:<a href='#'>{data.uploaded}</a></span></h2>}
                </div>

        });
    }
    dataVideo() {
        return this.state.links.map((data, i) => {
            return <div key={i}>
                
                {data.typeofupload === "video" && <div className="col-md-6"><iframe width="420" height="345" src={data.uploaded}></iframe></div>}</div>

        });
    }
    render(){
        return(
        <div className="container profil-container mt-5">
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
                    <div className="card mb-5 mx-5">
                        <div className="card bg-light">
                            <div className="card-body  ml-3">
                            <span  className="t-16 w-25 mb-2 disabled" >Lectures</span>
                             {this.state.links.map((data, i) => (<h2 key={i}>{data.typeofupload !=="video" && <span className="t-15">Wep-page:<a href='#'>{data.link}</a></span>}</h2>) )}
          
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <h2>Videos</h2>
                    <div className="row">
                        
                        {this.state.links.map((data, i) =><span> {data.typeofupload ==="video" && <div className="col-md-6" key={i}><iframe width="420" height="345" src={data.link}></iframe></div>}</span>)}
                        {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
                        </div> 
                   
                </div>
            </div>
        </div>
        )
    }
}