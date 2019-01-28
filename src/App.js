import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage.jsx'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <Homepage />} />
          </Switch>
        </BrowserRouter>
        </React.Fragment>
    );
  }
}

export default App;
