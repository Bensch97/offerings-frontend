import React, { Component } from 'react';
import '../App.css';
import LoginCard from '../components/LoginCard'
import { login } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component {

    state = {
        username: '',
        password: '',
    }
    //computed property syntax 

    handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [id]: value
        })
    }

    handleLogin = () => {
        console.log("fetching...")
        // Object Destructuring ES6 
        const { username, password } = this.state
        fetch("http://localhost:8000/api-auth/login/",
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                this.props.dispatch(login(data));
                console.log(data);
                if (this.props.token) {
                    this.setState({ loggedIn: true });
                }
                else {
                    alert("please register first");
                }
            })
    }

    render () {
        return (

                <LoginCard 
                    handleInputChange={ this.handleInputChange } 
                    handleLogin={ this.handleLogin }
                />

        )
    }
}

const mapStateToProps = (state) => {
    return { token: state.token }
  } 

export default withRouter(connect(mapStateToProps)(LoginPage));