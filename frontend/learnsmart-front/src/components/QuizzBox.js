import React, {useState, Component} from "react"; 
// Function to question inside our app 

const QuizzBox = ({ question, options, selected}) => { 
    const [answer, setAnswer] = useState(options); 
    return ( 
      <div className="questionBox row mt-3"> 
            <div className="question col-md-12">
                <h3>{question}</h3>
                <div className="mt-3">
                    {answer.map((text, index) => ( 
                        <button  key={index} className="answerBtn ml-3"
                            onClick={()=>{ setAnswer([text]); selected(text); }}> 
                            {text} 
                        </button> 
                    ))
                    } 
                </div>
            </div> 
      </div> 
    ) 
  }; 

  export default QuizzBox; 