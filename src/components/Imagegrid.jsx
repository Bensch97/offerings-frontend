import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import styled, { css } from 'styled-components'
import burger from './images/131.jpg'
import burrito from './images/burito.jpg'
import kebab from './images/kebab.jpg'
import pancake from './images/Pancake.jpeg'
import spagette from './images/spagette.jpg'
import taco from './images/taco.jpg'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginLeft: '5%',
        marginRight: '5%'
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54',
    },
    title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
    })

const Divider = styled.hr`
    color: gray;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.12);
`


const tileData= [
    {
        img:  burger ,
        title: 'Burger',
        author: 'Ben'
    },
    {
        img:  burrito ,
        title: 'Burito',
        author: 'Matt'
    },
    {
        img:  kebab ,
        title: 'Kebab',
        author: 'AJ'
    },
    {
        img:  pancake ,
        title: 'Pancake',
        author: 'Sam'
    },
    {
        img:  spagette ,
        title: 'Spagette',
        author: 'Ethan'
    },
    {
        img:  taco ,
        title: 'Taco',
        author: 'Sarah'
    }
]

function SingleLineGridList(props) {
    const { classes } = props;

return (
    <div className={classes.root}>
        <div>
        <Divider/>
        <GridList className={classes.gridList} col={2.5}>
            {tileData.map(tile => (
                <GridListTile key={tile.img} cols={.5}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                        title={tile.title}
                        subtitle={<span>{tile.author}</span>}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                        }
                        />
                </GridListTile>
            ))}
        </GridList>
        </div>
    </div>
    );
}

SingleLineGridList.PropTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(SingleLineGridList)