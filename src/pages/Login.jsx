//React
import React from 'react';
import { withRouter } from 'react-router-dom';

//CSS
import '../App.css';

//Components
import LoginCard from '../components/LoginCard'

//Redux
import { connect } from 'react-redux';

//Material Ui
import CircularProgress from '@material-ui/core/CircularProgress';

//Actions 
import * as actions from '../store/actions/index'


class LoginPage extends React.Component {

    state = {
        username: '',
        password: '',
        csrfToken: this.props.allCookies.csrftoken ? this.props.allCookies.csrftoken : ''
    }

    //Computed property syntax 
    handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [id]: value
        })
    }

    // handleLogin = () => {
    //     console.log("fetching...")
    //     // Object Destructuring ES6 
    //     const { username, password } = this.state
    //     fetch("http://localhost:8000/api-auth/login/",
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             mode: 'cors',
    //             body: JSON.stringify({ username, password })
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             this.props.dispatch(login(data));
    //             console.log(data);
    //             if (this.props.token) {
    //                 this.setState({ loggedIn: true });
    //             }
    //             else {
    //                 alert("please register first");
    //             }
    //         })
    // }
    

    handleLogin = (e) => {

        this.props.onAuth(this.state.username, this.state.password, this.state.csrfToken)
        this.props.history.push('/');
    }

    render () {
        
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?
                    
                    <CircularProgress />
                    :
                    <LoginCard
                        handleInputChange={ this.handleInputChange } 
                        handleLogin={ this.handleLogin }
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        token: state.token,
        loading: state.loading,
        error: state.error
    }
  }

const mapDispatchToProps = dispatch => {

    return {
        onAuth: (username, password, csrfToken) => dispatch(actions.authLogin(username, password, csrfToken))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
