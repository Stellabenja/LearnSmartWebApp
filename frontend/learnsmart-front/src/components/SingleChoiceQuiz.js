import React, {Component} from "react"; 
import axios from 'axios';
import QuizzBox from "./QuizzBox";
import Result from "./Result";

class SingleChoiceQuiz extends Component { 
constructor() { 
	super(); 
	this.state = { 
	questionBank: [], 
	score: 0, 
	responses: 0 ,
	currentTopic:""
	}; 
} 
// Set state back to default and call function 
playAgain = () => { 
    this.getQuestions(); 
    this.setState({score: 0, responses: 0}); 
  }; 
// Function to compute scores 
computeAnswer = (answer, correctAns,numberOfquest) => { 
	if (answer === correctAns) { 
	this.setState({ 
		score: this.state.score + 1 
	}); 
	} 
	this.setState({ 
	responses: this.state.responses < numberOfquest 
		? this.state.responses + 1 
		: numberOfquest 
	}); 
}; 
//get questions
getQuestions(){
    const { match: { params } } = this.props;
        if(this.props){
             console.log(params.topic_name)
            try{
                axios.get(`http://localhost:5000/api/singlechoice/${params.topic_name}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                      }
                }
                )
                .then(res => {
                    this.setState({ questionBank: res.data });
                })
                .catch(function (error) {
                    console.log(error);
                })
            }catch(error){
                console.log(error);
            }
        }
}
addScore(){
	const { match: { params } } = this.props;
	if(this.props){
	try{
		axios.post(`http://localhost:5000/api/score`,{"relatedtopic":params.topic_name,"score":this.state.score},
		{
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			  }
		}
		)
		.then(res => {
			console.log(res);
			
		})
		.catch(function (error) {
			console.log(error);
		})
	}catch(error){
		console.log(error);
	}
}
}
// componentDidMount function to get question 
componentDidMount() { 
	this.getCurrentTopicName();
	this.getQuestions();
	
} 
getCurrentTopicName(){
	const { match: { params } } = this.props;
	if(this.props){
		this.setState({ 
			currentTopic: params.topic_name
		}); 
	}
}
render() { 
	return (<div className="container profil-container mt-5"> 
	<div className="title mb-5 mt-3"> 
	
		<h2>Quiz On {this.state.currentTopic}</h2> 
	</div> 
	<div className="row">
		{this.state.questionBank.length > 0 && 
		this.state.responses < this.state.questionBank.length && 
		this.state.questionBank.map((data, i) => <QuizzBox question= 
		{data.question} options={data.assumptions} key={i} 
		selected={answer => this.computeAnswer(answer, data.answer,this.state.questionBank.length)}/>)} 
	</div>
	
 
	{ this.state.questionBank.length > 0 && this.state.responses === this.state.questionBank.length &&  this.addScore()} 
		
		{ 
			this.state.questionBank.length > 0 && this.state.responses === this.state.questionBank.length 
			? (<Result score={this.state.score} totalQuest={this.state.questionBank.length}
				playAgain={this.playAgain}/>) 
			: null
		}  
	{ this.state.questionBank.length <= 0 && <h2>This Topic Has No Quiz Available Yet </h2> } 
	</div>) 
} 
} 

export default SingleChoiceQuiz
