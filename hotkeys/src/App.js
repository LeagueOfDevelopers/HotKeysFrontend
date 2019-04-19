import React, { Component, Fragment } from 'react';

import {  Route, Switch, withRouter } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";
import LearningWindow from './containers/LearningWindow/LearningWindow'
import Footer from './containers/Footer/Footer'

import GlobalStyle from './themes/globalStyles';
import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment >
        <div className='App'>
        <GlobalStyle />

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/try' component={LearningWindow} />
          </Switch>

          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
