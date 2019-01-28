import React, { Component } from 'react';
import '../App.css';
import SingleLineGridList from '../components/ImageGrid'
import GreetAndHero from '../components/GreetAndHero'
import GridListHeader from '../components/CategoryHeaders';
import MenuAppBar from '../components/TopAppBar'

class Homepage extends Component {
    render() {
      return (
        <React.Fragment>
            <MenuAppBar header='Offerings' />
            <GreetAndHero />
            <GridListHeader category='Nearby' linky='SEE ALL'/>
            <SingleLineGridList/>
            <GridListHeader category="Recently posted" linky='SEE ALL'/>
            <SingleLineGridList/>
            <GridListHeader category='Your offerings' linky='NEW'/>
            <SingleLineGridList/>
          </React.Fragment>
      );
    }
  }

export default (Homepage);