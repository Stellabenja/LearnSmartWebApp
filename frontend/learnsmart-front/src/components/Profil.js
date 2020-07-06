import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom'
export default class Profil extends Component {
  
  constructor(props){
    super(props)
    this.onSubmitPasswordForm = this.onSubmitPasswordForm.bind(this);
    this.onSubmitUserDataForm = this.onSubmitUserDataForm.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onChangeActualPassword = this.onChangeActualPassword.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.state = {
      showPasswordForm: false,
      showUserDataForm: false,
      actualPassWord: '',
      newPassword: '',
      userName: '',
      email: '',
      dataChanged:false
      
    }
  }
  componentDidMount () {
    // var check = localStorage.getItem( 'userName' ) || 1;
    
    var userID = localStorage.getItem( 'userID' ) || 1;
    var userName = localStorage.getItem( 'userName' ) || 1;
    console.log(userID);
    if(userName===1) {
      if(userID ===1) {
        userID = this.props.userID
      }
      const userObject = {
        userID: userID,
      };
     
      axios.post('http://localhost:5000/api/userData', userObject)
      .then((res) => {
          if (res.status === 200) {
              this.props.updateUserData(res.data.userData.username, res.data.userData.email);
              console.log(userObject)
            };
          console.log(res);
          console.log(userObject)
          
      }).catch((error) => {
          console.log(error)
      });
    }
    console.log(userID);
    console.log(this.props.userID);
      
    
    
  }
  onChangeNewPassword(e) {
    this.setState({ newPassword: e.target.value })
  }
  onChangeActualPassword(e) {
    this.setState({ actualPassWord: e.target.value })
  }
  onChangeUserName(e) {
    this.setState({ userName: e.target.value })
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }
  showPasswordForm (){
    return (
      <div> 
     <form id= "change-password" onSubmit={this.onSubmitPasswordForm}>
 
          <label>Actual password: </label>
          <input type="password" value={this.state.actualPassWord} onChange={this.onChangeActualPassword} className="form-control" placeholder="Enter actual password"></input>
 
          <label> New password : </label>
          <input type="password" value={this.state.newPassword} onChange={this.onChangeNewPassword} className="form-control" placeholder="Enter new password"></input>
          <div className="asideComponents">
            <button type="submit" className="btn btn-primary btn-block btn-submit">Submit</button>
            <button type="button" className="btn btn-danger btn-block" onClick={() => this.setState({showPasswordForm: false}) }>Cancel</button>
          </div>
          
       </form>
       </div>
      );
  } 
  onSubmitPasswordForm(e) {
    e.preventDefault()
    var UserID = localStorage.getItem( 'userID' ) || 1;
    const userObject = {
        userID: UserID,
        actualPassWord: this.state.actualPassWord,
        newPassword:this.state.newPassword
    };
    axios.post('http://localhost:5000/api/auth/changePassword', userObject)
    .then((res) => {
        if (res.status === 200) {
          window.location.reload(); 
            
          };
        console.log(res)
        
    }).catch((error) => {
        console.log(error)
    });

    
  }

  showUserDataForm (){
    return (
      <div> 
     <form id= "change-userData" onSubmit={this.onSubmitUserDataForm}>
  
 
          <label> New Username : </label> 
          <input type="text" value={this.state.userName} onChange={this.onChangeUserName} className="form-control" placeholder="Enter new username"></input>

          <label> New email : </label>
          <input type="email" value={this.state.email} onChange={this.onChangeEmail} className="form-control" placeholder="Enter new email"></input>
          <div className="asideComponents">
            <button type="submit" className="btn btn-primary btn-block btn-submit">Submit</button>
            <button type="button" className="btn btn-danger btn-block" onClick={() => this.setState({showUserDataForm: false}) }>Cancel</button>
          </div>
          
       </form>
       </div>
      );
  }
  onSubmitUserDataForm(e) {
    e.preventDefault()

    var UserID = localStorage.getItem( 'userID' ) || 1;
    const userObject = {
        userID: UserID,
        userName: this.state.userName,
        email:this.state.email
    };
    axios.post('http://localhost:5000/api/changeUserData', userObject)
    .then((res) => {
        if (res.status === 200) {
          this.setState({ dataChanged: true });
            
        };
        console.log(res)
        
    }).catch((error) => {
        console.log(error)
    });

    console.log(this.state.dataChanged)
  }

  render() {
    if (this.state.dataChanged) {
      localStorage.removeItem('userName');
      localStorage.removeItem('email');
      console.log(localStorage.getItem( 'userName' ));
      return (
        window.location.reload()
      );
    } else {
    
      var isLoggedIn = localStorage.getItem( 'isLoggedIn' ) || 1;
      var userName = localStorage.getItem( 'userName' ) || 1;
      var email = localStorage.getItem( 'email' ) || 1;
      console.log(localStorage.getItem( 'userName' ));
          return (
            <div className="auth-wrapper">
              <div className="auth-inner profil">
                
                <div className="userData profil">
                  {userName!==1 &&
                              <div>
                                  <strong>Username: </strong> {userName}<br></br>
                                  <strong>Email: </strong> {email}<br></br>
                                  <div> </div>
                              </div>

                              
                  }
                  {userName===1 &&
                              <div>
                                  <strong>Username: </strong>{this.props.userName}<br></br>
                                  <strong>Email: </strong> {this.props.email}<br></br>
                              </div>
                  }
                  <div className='asideComponents profil'>
                    <div><strong>Password: </strong>********<br></br></div>
                    <button className="btn btn-secondary btn-block"  onClick={() => this.setState({showPasswordForm: true}) }>Change password</button>
                  </div>
                </div>
                
                
                <div>
                  {this.state.showPasswordForm ? this.showPasswordForm() : null}
                  {this.state.showUserDataForm ? this.showUserDataForm() : null}
                </div>
                

                <div>
                  <button className="btn btn-secondary btn-block btn-updateUserData"  onClick={() => this.setState({showUserDataForm: true}) }>Update User Data</button>
                </div>
              </div>
              
            </div> 
          );
    }
      
  }
    
}
