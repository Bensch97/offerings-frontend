import React, { Component } from 'react';
import './App.css';
import SingleLineGridList from './components/Imagegrid.jsx'


class App extends Component {
  render() {
    return (
      <SingleLineGridList category='Nearby'/>
    );
  }
}

export default App;
