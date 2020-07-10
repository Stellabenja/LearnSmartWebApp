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
import SingleChoiceQuiz from './SingleChoiceQuiz';
import TopicMaterial from './TopicMaterial';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        isLoggedIn: false,
        userName:'',
        email:'',
        userID:'',
        redirect: false
    }
    this.changeStatus = this.changeStatus.bind(this);
    this.saveUserId = this.saveUserId.bind(this);
    this.addUserData = this.addUserData.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
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
        </Switch> 
      </Router>
     
      <Footer/>
    </div>
  );
}}

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

