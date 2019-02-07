import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Homepage from './pages/Homepage.jsx';
import CreateOffering from './pages/CreateOffering.jsx';
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';
import MenuAppBar from './components/TopAppBar';
import { object } from 'prop-types';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { connect } from 'react-redux';


const theme = createMuiTheme({
  palette: green
})

const MuiStyledBridge = withStyles({}, {withTheme: true})(({ theme, children }) => {
  return <ThemeProvider theme={theme}>
      {children}
  </ThemeProvider>
})


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <MuiStyledBridge> 
            <MenuAppBar>
            
              <Switch>
                <Route exact path='/' render={() => <Homepage {...this.props}/>} />
                <Route exact path='/create_offering' render={() => <CreateOffering {...this.props}/>} />
                <Route exact path='/login' render={() => <LoginPage {...this.props}/>} />
                <Route exact path='/signup' render={() => <SignupPage {...this.props}/>} />
              </Switch>

            </MenuAppBar>
          </MuiStyledBridge>
          </MuiThemeProvider>
        </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token != null
  }
}

export default connect(mapStateToProps)(App);
