import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import Header from './containers/Header/Header'
import LearningWindow from './containers/LearningWindow/LearningWindow'
import Footer from './containers/Footer/Footer'

import './App.css';

const mapStateToProps = state => ({
  isLoginned: false
})

const mapDispatchToProps = dispatch => {

}

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Fragment>
        <Header onInputChange={this.onInputChange} />
        <LearningWindow />
        <Footer />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
