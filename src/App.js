// React
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//React-Cookies
import { withCookies } from 'react-cookie';

// Redux
import { connect } from 'react-redux';

// Material Ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

// CSS
import { ThemeProvider } from 'styled-components';
import './App.css';

// Pages
import CreateOffering from './pages/CreateOffering.jsx';
import Homepage from './pages/Homepage.jsx';
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';
import MenuAppBar from './components/TopAppBar';

// Actions
import * as actions from './store/actions/index'


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
            <MenuAppBar {...this.props}>
            
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

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState())
  }
}
const cookieApp = withCookies(App)

export default connect(mapStateToProps, mapDispatchToProps)(cookieApp);
