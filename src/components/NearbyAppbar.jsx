import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    width: '50%',
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function MaterialIcon(props) {
    return (
      <i class='material-icons green300'>
        {props.icon}
      </i>
    )
}

function NearbyAppbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'white'}}>
          <Button><MaterialIcon icon='apps' /></Button>
          <Button><MaterialIcon icon='navigation' /></Button>
      </AppBar>
    </div>
  );
}

NearbyAppbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NearbyAppbar);