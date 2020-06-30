 import React from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js"
import Topics from './Topics';
import AddTopic from './AddTopic';
import AddQuiz from './AddQuiz';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
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
        </Switch> 
      </Router>
     
      <Footer/>
    </div>
  );
}

export default App;
