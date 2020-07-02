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
            
        </Switch> 
      </Router>
     
      <Footer/>
    </div>
  );
}

export default App;
