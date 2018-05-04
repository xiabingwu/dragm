import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom"
import './App.css';
import AntdModalDrag from './components/AntdModalDrag';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={AntdModalDrag} />
      </div>
    </Router>
    );
  }
}

export default App;
