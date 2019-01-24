import React, { Component } from 'react';
import './App.css';
import SingleLineGridList from './components/Imagegrid.jsx'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SingleLineGridList category='Nearby'/>
        <SingleLineGridList category="Recently posted"/>
        <SingleLineGridList category='Your offerings'/>
      </React.Fragment>
    );
  }
}

export default App;
