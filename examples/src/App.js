import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import AntdModalDrag from './components/AntdModalDrag';
import BaseDrag from './components/BaseDrag';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/BaseDrag" component={BaseDrag} />
        <Route exact path="/AntdModalDrag" component={AntdModalDrag} />
      </div>
    </Router>
    );
  }
}

export default App;
