import React, {useState, Component} from "react"; 
// Function to question inside our app 

const QuizzBox = ({ question, options, selected}) => { 
    const [answer, setAnswer] = useState(options); 
    return ( 
            <div className="questionBox col-md-6 mt-4 ">
                
                <div className=" row mt-3 ">
                <span className="ml-4">
                    <svg width="5em" height="5em" viewBox="0 0 30 30" className="bi bi-question-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
                    </svg>
                </span> 
                <h3 className="mb-5 ml-1">{question}</h3>
               
                    {answer.map((text, index) => ( 
                        <div className="col-md-12 mt-3" key={index}>
                            <div className="card">
                                    <div className="card bg-primary ptr">
                                        <div className="card-body text-center key={index}  ml-3"
                                                onClick={()=>{ setAnswer([text]); selected(text); }}>
                                            <p className="card-text text-white t-15" > {text}  </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))
                    } 
                     
                     
                </div>
            
            </div> 
    ) 
  }; 

  export default QuizzBox; 