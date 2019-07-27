import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
// import Login from './component/login'
// import NewUser from './component/newUser'
import HomePage from './component/homePage'
import NewItem from './component/newItem'
import EditItem from './component/editItem'
import EditUser from './component/editUser'
import HeaderLogo from './component/headerLogo'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// import react router 

import './App.css';
import ViewUser from './component/viewUser';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {
          firstName: "",
          lastName: "",
          contactNumber: "",
          emailAddress: "",
          password: "",
          qrCode: "",
      },
      items: []
    }
  }

  componentDidMount = () => {
    const urlUser = "https://stark-plateau-81274.herokuapp.com/users/8"
    
    fetch(urlUser)
        .then(response => response.json())
        .then(result => this.formatUserResult(result))
        .catch(error => console.error(error))
  }

  formatUserResult = result => {
    this.setState({
        userInfo: {
            firstName: result.first_name,
            lastName: result.last_name,
            contactNumber: result.contact_number,
            emailAddress: result.email_address,
        },
        items: result.items
    })
  }

  render () {
    return(
      <Router>
        <div className="app">
          <div className="navBarContainer">
            <div className="logoOne">
                <img src="https://i.imgur.com/yU93abh.png"></img>
            </div>
            <div className="navBar">
                <div className="navBarButtons">
                    <button className="navBar-home-button"><i className="fa fa-home fa-2x"></i></button>
                    {/* <button className="navbar-user-button" onClick={this.handleClickUserInfo}><i className="fa fa-user fa-2x"></i></button> */}
                    <button className="navbar-user-button" to="/accountInformation"><i className="fa fa-user fa-2x"></i></button>
                    <button className="navBar-newItem-button"><i className="fa fa-plus-square  fa-2x"></i></button>
                </div>
            </div>
          </div>

        <Switch>
          <Route 
            path="/"
            render={ () => <HomePage userInfo={this.state.userInfo} items={this.state.items}/>} 
            />
          <Route 
            path="/editUser/"
            render ={ () => <EditUser userInfo={this.state.userInfo} />}
            />
          <Route path="/editItem" component={ EditItem } />
          <Route 
            path="/newItem"
            render ={ () => <NewItem userInfo={this.state.userInfo}/>} 
          />
          <Route 
            path="/accountInformation"
            render={ () => <ViewUser userInfo={this.state.userInfo} />}
            />
        </Switch>

      </div>
    </Router>
  )}
}






//   <div className="app">
//   <HeaderLogo />

//   {/* <Route path="/login" component={Login}/> */}
//   {/* <Login /> */}
//   {/* <NewUser /> */}
//   {/* <HomePage /> */}
//   {/* <NewItem /> */}
//   {/* <EditUser /> */}
//   <EditItem />

// </div>