import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import Header from './containers/Header/Header'
import LearningWindow from './containers/LearningWindow/LearningWindow'
import Footer from './containers/Footer/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <LearningWindow />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
