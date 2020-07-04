import React, {Component} from "react"; 
import axios from 'axios';
import QuizzBox from "./QuizzBox";

class SingleChoiceQuiz extends Component { 
constructor() { 
	super(); 
	this.state = { 
	questionBank: [], 
	score: 0, 
	responses: 0 
	}; 
} 

// Function to compute scores 
computeAnswer = (answer, correctAns) => { 
	if (answer === correctAns) { 
	this.setState({ 
		score: this.state.score + 1 
	}); 
	} 
	this.setState({ 
	responses: this.state.responses < 5 
		? this.state.responses + 1 
		: 5 
	}); 
}; 

// componentDidMount function to get question 
componentDidMount() { 
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

render() { 
	return (<div className="container"> 
	<div className="title"> 
		QuizOn 
	</div> 

	{this.state.questionBank.length > 0 && 
	this.state.responses < 5 && 
	this.state.questionBank.map((data, i) => <QuizzBox question= 
	{data.question} options={data.assumptions} key={i} 
	selected={answer => this.computeAnswer(answer, data.answer)}/>)} 

	{/* { 
		this.state.responses === 5 
		? (<Result score={this.state.score} 
			playAgain={this.playAgain}/>) 
		: null
	}  */}

	</div>) 
} 
} 

export default SingleChoiceQuiz
