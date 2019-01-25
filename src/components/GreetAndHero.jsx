import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import foodImage from "./images/bitmap.png"
import backup1 from "./images/bitmap@2x.png"
import backup2 from "./images/bitmap@3x.png"

const HeroImage = styled.img`
    width: 645px;
    height: 301px;
    object-fit: contain;
`
const Sharing = styled.p`
  
    font-family: Roboto;
    font-size: 36px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #373504;
`
const Description = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.54);
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5%
`

class GreetAndHero extends React.Component {
render() {
    return (
    <Container>
        <div>
        <Sharing>share food with neighbors</Sharing>
        <Description>
            offerings helps you find food from your own
            neighbors, and share food – so nothing goes
            to waste
        </Description>
        </div>
        <HeroImage src={foodImage}
        srcset={[backup1, backup2]} />
    </Container>
    )}

}

export default GreetAndHero