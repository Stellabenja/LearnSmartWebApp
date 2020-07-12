import React , { Component } from 'react';
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
import Profil from './Profil';
import Logout from './Logout';
import ShareData from './ShareData';
import SingleChoiceQuiz from './SingleChoiceQuiz';

import UploadPage from './UploadPage.js';

import TopicMaterial from './TopicMaterial';
import UserStatus from './UserStatus';


export default class App extends Component {

  constructor(props){
    super(props)

    this.changeStatus = this.changeStatus.bind(this);
    this.saveUserId = this.saveUserId.bind(this);
    this.addUserData = this.addUserData.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
    this.fillUploadList = this.fillUploadList.bind(this);
    this.setUploadsListFilled = this.setUploadsListFilled.bind(this);
    this.setSelectedTopic = this.setSelectedTopic.bind(this);

    this.state = {
        isLoggedIn: false,
        userName:'',
        email:'',
        userID:'',
        redirect: false,
        uploadsList:[],
        selectedTopic:'',
        uploadsListFilled: false,
    }
    
    
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
  redirectPage(redirect) {
    this.setState({
      redirect:redirect,
    });
  }
  fillUploadList(list) {
    this.setState({ 
      uploadsList: list,
    });
  }
  setSelectedTopic(topic) {
    this.setState({ 
      selectedTopic: topic,
    });

    if(localStorage.getItem( 'selectedTopic' )===null || localStorage.getItem( 'selectedTopic' )!==topic) {
      localStorage.setItem( 'selectedTopic', topic );
    }
  }
  setUploadsListFilled(){
    this.setState({ uploadsListFilled: true });
  }
  render(){
  return (
    <div className="App">
      
      <Router>
      <Header isLoggedIn={this.state.isLoggedIn}/>
        <Switch>
        <Route exact path="/">
          <Home isLoggedIn={this.state.isLoggedIn}/>
        </Route>
        <Route exact path="/sign-in">
              <Login changeStatus={this.changeStatus} 
                     isLoggedIn={this.state.isLoggedIn}/>
        </Route> 
        <Route exact path="/logout">
          <Logout isLoggedIn={this.state.isLoggedIn} redirect={this.state.redirect}
                  redirectPage={this.redirectPage} changeStatus={this.changeStatus}/>
        </Route>
        <Route exact path="/profil">
          <Profil userID={this.state.userID} userName={this.state.userName} 
                  email={this.state.email}
                  isLoggedIn={this.state.isLoggedIn}
                  updateUserData={this.addUserData}/>
        </Route> 
          <Route path="/signup">
          <Signup/>
          </Route>
          <Route path="/topics" component={Topics}/>
         
          <Route path="/addTopic">
            <AddTopic/>
          </Route>
          <Route path="/addQuiz">
            <AddQuiz/>
          </Route>
          <Route path="/quiz/:topic_name" component={Quiz}/>
          <Route path="/quizbox/:topic_name" component={SingleChoiceQuiz}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/topicmaterial/:topic_name" component={TopicMaterial}/>
          <Route path="/status" component={UserStatus}/>
          <Route path="/share-data">
            <ShareData selectedTopic={this.state.selectedTopic} 
                uploadsListFilled={this.state.uploadsListFilled} setUploadsListFilled={this.setUploadsListFilled}
                uploadsList={this.state.uploadsList} fillUploadList={this.fillUploadList} setSelectedTopic={this.setSelectedTopic} />
          </Route>
          <Route path="/showUploadPage">
            <UploadPage selectedTopic={this.state.selectedTopic} uploadsList={this.state.uploadsList} setUploadsListFilled={this.setUploadsListFilled}
             fillUploadList={this.fillUploadList}/>
          </Route>
        </Switch> 
      </Router>
     
      <Footer/>
    </div>
  );
}}

