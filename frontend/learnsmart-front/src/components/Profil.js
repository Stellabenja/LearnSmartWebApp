import React, { Component } from "react";
import '../styles/Auth.css';
import axios from 'axios';
import profilIcon from '../images/person.png';
import editIcon from '../images/edit-icon.png';
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
      showEditProfileBtn: true,
      showChangePasswordBtn: true,
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
      <div className="form-div border"> 
      <form id= "change-password" className= "form-edit-profil" onSubmit={this.onSubmitPasswordForm}>

          <div className="form-box">
            <label className="label-top">Change Password</label>
            <div className="form-group first-row">
                <label className="form-label">Actual password: </label> 
                <input type="password" value={this.state.actualPassWord} onChange={this.onChangeActualPassword}
                className="form-control profil-input" placeholder="Enter actual password"></input>
            </div>
            <div className="form-group second-row">
                <label className="form-label">New password : </label>
                <input type="password" value={this.state.newPassword} onChange={this.onChangeNewPassword}
                className="form-control profil-input" placeholder="Enter new password"></input>
            </div>
          </div>

          <div className="btn-row row">
            <div className="col-md-6 mt-2">
              <button type="submit" className="btn btn-primary btn-block btn-form">Submit</button>
            </div>
            <div className="col-md-6 mt-2">
              <button type="" className="btn btn-danger btn-block btn-form " onClick={() => 
                this.setState({showPasswordForm: false, showChangePasswordBtn: true}) }>
                Cancel
              </button>
            </div>
            
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
          this.setState({showPasswordForm: false, showChangePasswordBtn: true})  
          };
        console.log(res)
        
    }).catch((error) => {
        console.log(error)
    });

    
  }

  showUserDataForm (){
    return (
      <div className="form-div border"> 
        <form className= "form-edit-profil" onSubmit={this.onSubmitUserDataForm}>

            <div className="">
            <label className="label-top">Edit Profil</label>
              <div className="form-group first-row">
                  <label className="form-label">Username : </label> 
                  <input type="text" value={this.state.userName} onChange={this.onChangeUserName}
                  className="form-control profil-input" placeholder="Enter new username"></input>
              </div>
              <div className="form-group second-row">
                  <label className="form-label">Email : </label>
                  <input type="email" value={this.state.email} onChange={this.onChangeEmail}
                  className="form-control profil-input" placeholder="Enter new email"></input>
              </div>
            </div>

            <div className="btn-row row">
              <div className="col-md-6 mt-2">
                <button type="submit" className="btn btn-primary btn-block btn-form">Submit</button>
              </div>
              <div className="col-md-6 mt-2">
                <button type="" className="btn btn-danger btn-block btn-form " onClick={() => 
                  this.setState({showUserDataForm: false, showEditProfileBtn: true}) }>
                  Cancel
                </button>
              </div>
              
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
          this.setState({ dataChanged: true, showUserDataForm: false});
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
            <div className="profil-container container">
              <div className="row profil">
                
                <div className="left-side col-md-3">
                  <div className="" id="profil-icon-box"><img id="profil-icon" src={profilIcon} alt="Profil" /></div>
                  {userName!==1 &&
                              <div className="user-data">
                                <div className="user-name"> <strong>{userName}</strong> <br></br></div>
                                <div className="user-email">{email} </div>
                              </div>
                  }
                  {userName===1 &&
                              <div>
                                <div className="user-name"> <strong>{this.props.userName}</strong> <br></br></div>
                                <div className="user-email">{this.props.email}</div>
                              </div>
                  }
                  <div className='asideComponents'>
                    
                    
                    {this.state.showEditProfileBtn &&
                      <div>
                        <button className="btn btn-profil btn-updateUserData"  onClick={() => 
                          this.setState({showUserDataForm: true, showPasswordForm: false, showEditProfileBtn: false, showChangePasswordBtn: true}) }>
                          <img id="edit-icon" src={editIcon} alt="edit Profil" />
                            Edit profil
                        </button>
                      </div>
                    }
                      
                    {this.state.showChangePasswordBtn &&
                      <div>
                        <button className="btn btn-profil"  onClick={() => 
                          this.setState({showPasswordForm: true, showUserDataForm: false, showChangePasswordBtn: false, showEditProfileBtn: true,})  }>
                          <img id="edit-icon" src={editIcon} alt="edit Profil" />
                          Change password
                        </button>
                      </div>

                    }
                    
                  </div>
                  <div className="row">
                    {this.state.showPasswordForm ? this.showPasswordForm() : null}
                    {this.state.showUserDataForm ? this.showUserDataForm() : null}
                  </div>
                </div>
                <div className="right-side col-md-8">
                  <div className="quizz-info border"></div>
                  {/*<div className="container quizz-info"> </div>*/}
                 
                  
                </div>
              </div>
              
            </div> 
          );
    }
      
  }
    
}
