import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
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
  button: {
    margin: theme.spacing.unit,
  },
});

class MaterialIcon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isTogleOm: true}
    this,icon = ''
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
       // This binding is necessary to make `this` work in the callback
      isTogleOn: !state.isTogleOn
    }))
  }
  render () {
        <i onClick={this.handleClick} {...this.state.isTogleOn ? class{'material-icons green300-active'}
                                  : class{'material-icons green300-inactive'}}>
          {icon}
        </i>
    }
  }


function NearbyAppbar(props) {
  const { classes } = props;
  const icons = ['apps', 'nsetion']
  render() {
    const items = []
    for (const [index, value] of elements.icons() {
      items.push(<li key={index}>{value}</li>)
    }
  return (        
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'white'}}>
          <IconButton>
            <MaterialIcon icon={icons[i]} />
          </IconButton>
      </AppBar>
    </div>
  );
}}

NearbyAppbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NearbyAppbar);