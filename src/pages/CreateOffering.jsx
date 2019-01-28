import React, { Component } from 'react';
import '../App.css';
import SimpleCard from '../components/CreateOfferingCard';
import MenuAppBar from '../components/TopAppBar'

class CreateOffering extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MenuAppBar header='New offering' />
                <div style={{display: 'flex', backgroundColor: 'lightgrey'}}>
                <SimpleCard />
                </div>
            </React.Fragment>
        );
    };
};

export default (CreateOffering);