import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';




const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)'
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
});



const tileData= [
    {
        img: '131.jpg',
        title: 'Burger',
        author: 'Ben'
    },
    {
        img: 'burito.jpg',
        title: 'Burito',
        author: 'Matt'
    }
]

function SingleLineGridList(props) {
    const { classes } = props;

return (
    <div className={classes.root}>
        <GridListTile key="Subheader" style={{ height: 'auto' }}>
          <ListSubheader component="div" > {props.category} </ListSubheader>
        </GridListTile>
        <GridList col={2.5} className={classes.gridList}>
            {tileData.map(tile => (
                <GridListTile style={{width: 168}} key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                        title={tile.title}
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
    );
}

SingleLineGridList.PropTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(SingleLineGridList)