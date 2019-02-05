import React, { Component } from 'react';
import '../App.css';
import ProfileCard from '../components/ProfileCard'

class ProfilePage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <ProfileCard />
            </React.Fragment>
        )
    }
}

export default ProfilePage