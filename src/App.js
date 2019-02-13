import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components'
import './App.css';
import Homepage from './pages/Homepage.jsx'
import CreateOffering from './pages/CreateOffering.jsx'
import LoginPage from './pages/Login.jsx'
import SignupPage from './pages/Signup.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import PostMap from './pages/PostMap.jsx'
import MenuAppBar from './components/TopAppBar'
import { object } from 'prop-types';
import styled from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green'


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
            <BrowserRouter>
              <Switch>
                <Route exact path='/' render={() => <Homepage />} />
                <Route exact path='/create_offering' render={() => <CreateOffering />} />
                <Route exact path='/login' render={() => <LoginPage />} />
                <Route exact path='/signup' render={() => <SignupPage />} />
                <Route exact path='/profile' render={() => <ProfilePage />} />
                <Route exact path='/post_map' render={() => <PostMap />} />
              </Switch>
            </BrowserRouter>
            </MenuAppBar>
          </MuiStyledBridge>
          </MuiThemeProvider>
        </React.Fragment>
    );
  }
}

export default App;
