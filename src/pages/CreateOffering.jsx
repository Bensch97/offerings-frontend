import React, { Component } from 'react';
import '../App.css';
import SimpleCard from '../components/CreateOfferingCard';
import MenuAppBar from '../components/TopAppBar'
import { grey } from '@material-ui/core/colors';

class CreateOffering extends React.Component {
    render() {
        return (  
                <SimpleCard />    
        );
    };
};

export default (CreateOffering);