 import React from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js"
import Topics from './Topics';
import AddTopic from './AddTopic';
import AddQuiz from './AddQuiz';
import Quiz from './Quiz';
import Logout from './Logout';
import SingleChoiceQuiz from './SingleChoiceQuiz';
import Result from './Result';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Switch>
        <Route exact path="/" component={withRouter(Home)} />
          <Route path="/sign-in">
            <Login/>
            
          </Route>
          <Route path="/signup">
          <Signup/>
          </Route>
          <Route path="/topics">
            <Topics/>
          </Route>
          <Route path="/addTopic">
            <AddTopic/>
          </Route>
          <Route path="/addQuiz">
            <AddQuiz/>
          </Route>
          <Route path="/quiz/:topic_name" component={Quiz}/>
          <Route path="/quizbox/:topic_name" component={SingleChoiceQuiz}/>
          <Route path="/logout" component={Logout}/>
        </Switch> 
      </Router>
     
      <Footer/>
    </div>
  );
}
export default App;
/*export default class Logout extends Component {
constructor(props){
    super(props)
    this.state = {
        redirect: false
    }
}
    componentDidMount() {
        axios.get('http://localhost:5000/api/auth/logout',
        {
            headers: {
            'Authorization':`Bearer ${localStorage.getItem('token')}`
          }
        }
        )
            .then(res => {
                console.log(res.data)
                 this.setState({ redirect: true })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
        //return <Redirect to='/sign-in'/>;
        }
        return(<div>LOGOUT</div>) 
    }
} */

