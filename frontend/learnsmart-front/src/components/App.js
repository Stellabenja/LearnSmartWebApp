import React , { Component } from 'react';
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
import Quiz from './Quiz';
import Profil from './Profil';
import Logout from './Logout';
export default class App extends Component {



  constructor(props){
    super(props)
    this.state = {
        isLoggedIn: false,
        userName:'',
        email:'',
        userID:'',
    }
    this.changeStatus = this.changeStatus.bind(this);
    this.saveUserId = this.saveUserId.bind(this);
    this.addUserData = this.addUserData.bind(this);
  }

  changeStatus(isLoggedIn, userID) {
      this.setState({
        isLoggedIn:isLoggedIn,
        userID:userID,
      });

    localStorage.setItem( 'isLoggedIn', isLoggedIn );
    localStorage.setItem( 'userID', userID );
  }
  addUserData(userName, email) {
    this.setState({
      userName:userName,
      email:email,
    });
    localStorage.setItem( 'userName', userName );
    localStorage.setItem( 'email', email );
  }  
  saveUserId(userID) {
    this.setState({
      userID:userID,
    });
  }
  render(){
    return (
      <div className="App">
        
        <Router>
        <Header isLoggedIn={this.state.isLoggedIn}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/sign-in">
              <Login changeStatus={this.changeStatus} 
                     isLoggedIn={this.state.isLoggedIn}
              />
            </Route> 
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/profil">
              <Profil userID={this.state.userID} userName={this.state.userName} 
                      email={this.state.email}
                      isLoggedIn={this.state.isLoggedIn}
                      updateUserData={this.addUserData}
              />
            </Route> 
            <Route path="/signup">
            <Signup />
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
            <Route path="/quiz">
              <Quiz/>
            </Route>
          </Switch> 
        </Router>
       
        <Footer/>
      </div>
    );
  }
  }


