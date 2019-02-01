import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

import Header from './containers/Header/Header'
import HomePage from "./containers/HomePage/HomePage";
import LearningWindow from './containers/LearningWindow/LearningWindow'
import Footer from './containers/Footer/Footer'

import './App.css';
import { loadTasks } from './actions';

const testTasks = [
  { "id": 1, "name": "ctrl+a", "answer": 65 },
  { "id": 2, "name": "ctrl+b", "answer": 66 },
  { "id": 3, "name": "ctrl+c", "answer": 67 },
  { "id": 4, "name": "ctrl+d", "answer": 68 }]

const mapDispatchToProps = dispatch => ({
  loadTasks: (tasks) => dispatch(loadTasks(tasks)),
})

class App extends Component {

  componentDidMount() {
    this.props.loadTasks(testTasks)
  }


  render() {
    return (
      <Fragment >
        <div className='App'>
          <Header />

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

export default withRouter(connect(null, mapDispatchToProps)(App));
