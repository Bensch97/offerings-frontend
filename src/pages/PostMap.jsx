import React, { Component } from 'react';
import '../App.css';
import WrappedContainer from '../components/MapContainer.jsx';
import NearbyAppbar from '../components/NearbyAppbar.jsx';

class PostMap extends React.Component {
    render () {
        return (
            <div>
                <NearbyAppbar />
                <WrappedContainer />
            </div>
        )
    }
}

export default (PostMap)