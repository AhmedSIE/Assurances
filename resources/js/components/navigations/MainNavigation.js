  import React, { Component } from 'react'
  import ReactDOM from 'react-dom'
  import { BrowserRouter, Route, Switch } from 'react-router-dom'
  import Header from './../partials/Header'
  import NavBar from './../partials/NavBar'
  import Footer from './../partials/Footer'
  import Notifications from './../pages/Notifications'
  import Login from './../auth/Login'
  import Dashbord from './../pages/Dashbord'


  class MainNavigation extends Component {
      render () {
          return (
              <BrowserRouter>
                  <Header />
                  <NavBar/>
                  <Switch>
                      <div id="main">
                          <Route exact path='/' component={Login} />
                          <Route exact path='/dashbord' component={Dashbord} />
                          <Route exact path='/notification' component={Notifications} />
                      </div>
                  </Switch>
                  <Footer/>
              </BrowserRouter>
          )
      }
  }

  export default MainNavigation
