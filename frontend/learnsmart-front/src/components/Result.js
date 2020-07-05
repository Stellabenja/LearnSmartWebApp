import React, {Component} from "react"; 
import axios from 'axios';

const Result = ({score, totalQuest, playAgain}) => ( 
    <div className="row mt-5"> 
      <div className="col-md-12"> <h3>Your score is {score} / {totalQuest} correct answer ! ! ! </h3></div> 
     <div className="col-md-12 mt-4"> <button className="playBtn btn btn-primary" onClick={playAgain} > Play Again </button> </div>
    </div> 
  ) 
    
  export default Result; 