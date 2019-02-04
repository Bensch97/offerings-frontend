import React, { Component } from 'react';
import '../App.css';
import LoginCard from '../components/LoginCard'

class LoginPage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <LoginCard />
            </React.Fragment>
        )
    }
}

export default LoginPage