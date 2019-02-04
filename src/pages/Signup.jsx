import React, { Component } from 'react';
import '../App.css';
import SignupCard from '../components/SignupCard'

class SignupPage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <SignupCard />
            </React.Fragment>
        )
    }
}

export default SignupPage