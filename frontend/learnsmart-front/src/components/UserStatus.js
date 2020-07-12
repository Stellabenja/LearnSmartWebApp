import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
export default class UserStatus extends Component {
    constructor(props){
        super(props); 
        this.state = { 
        visitedTopics: [], 
        dataSerie:[],
        series: [],
        options: {
            chart: {
            height: 350,
            type: 'area'
            },
            dataLabels: {
            enabled: false
            },
            stroke: {
            curve: 'smooth'
            },
            xaxis: {
            type: 'text',
            categories: ["score1", "score2", "score3", "score4", "score5"]
            },
            
        },
          
        }; 
    }
    getAllVisitedTopic(){
        axios.get('http://localhost:5000/api/score',
        {
            headers: {
            'Authorization':`Bearer ${localStorage.getItem('token')}` 
          }
        }
        )
            .then(res => {
                this.setState({ visitedTopics: res.data });
                console.log(this.state.visitedTopics);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getSerieData(){
        axios.get('http://localhost:5000/api/lastrecord',
        {
            headers: {
            'Authorization':`Bearer ${localStorage.getItem('token')}` 
          }
        }
        )
            .then(res => {
                this.setState({ dataSerie: res.data });
                console.log( this.state.dataSerie);
                const newDataSerie=[...this.state.series]
                 this.state.dataSerie.map((data,i)=>{
                     newDataSerie.push({
                        name:data.data._id,
                        data:data.data.score.slice(Math.max(data.data.score.length - 5, 0))
                    })
                    this.setState({newDataSerie})
                    
                }) 
                this.setState({series:newDataSerie})
                console.log( newDataSerie);
               
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidMount(){
        this.getAllVisitedTopic()
        this.getSerieData()
    }
    dataButton() {
        return this.state.visitedTopics.map((data,i) => {
            return <div className="col-12 col-md-12 mt-4" key={i} >
                    <Link to={`/quizbox/${data.name}`}> <button className="btn btn-yellow t-medium text-darkblue btn-topic"> {data.name} </button></Link>
                   </div>
        });
    }
render(){

    return(
        <div className="container profil-container">
            <div className="row mt-5">
            <div className="col-md-4 mt-4">
                <h3>Topics Already Visited </h3>
                <div className="row ">
                {this.dataButton()}
                </div>
            </div>
           
            <div id="chart" className="col-md-8 mt-4">
            <h3>Last Five Scores By Topics</h3>
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
    
            </div>

        </div>
    )
}
}