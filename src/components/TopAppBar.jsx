import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import styled from 'styled-components';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    && {
      @media(max-width: 600px) {
        display: none;
      }
    }
  `

const MobileContainer = styled(MenuIcon)`
  && {
    @media(min-width: 600px) {
      display: none;
    }
    }
  `

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

// 'report_problem', 'settings', 'undo'

function MaterialIcon(props) {
  return (
    <i class='material-icons'>
      {props.icon}
    </i>
  )
}


  class MenuAppBar extends React.Component {
    state = {
      auth: true,
      anchorEl: null,
      left: false,
    };
  
    handleChange = event => {
      this.setState({ auth: event.target.checked });
    };
  
    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    toggleDrawer = (side, open) => () => (
      this.setState({
        [side]: open,
      })
    )
  
    render() {
      const { classes } = this.props;
      const { auth, anchorEl } = this.state;
      const open = Boolean(anchorEl);
      const sideList = (
        <div className={classes.list}>
          <List>
              <ListItem>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>{<MaterialIcon icon='report_problem' />}</ListItemIcon>
                <ListItemText>Give feedback</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>{<MaterialIcon icon='settings' />}</ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </ListItem>
              {
                this.props.isAuthenticated ?

                <ListItem>
                  <ListItemIcon>{<MaterialIcon icon='undo' />}</ListItemIcon>
                  <ListItemText>logout</ListItemText>
                </ListItem>

                :
                
                <ListItem>
                  <ListItemIcon>{<MaterialIcon icon='undo' />}</ListItemIcon>
                  <ListItemText>login</ListItemText>
                </ListItem>

              }
              
          </List>
        </div>
      )

      return (
        <div className={classes.root}>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
          {/* <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup> */}
          <AppBar position="static" style={{backgroundColor:'Green'}}>
            <Toolbar>
              <Typography variant="h6" marginLeft="20" color="inherit" className={classes.grow}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                  <MobileContainer/>
                </IconButton>
              </Typography>
              {auth && (
              <RightContainer>
                  <Typography variant="h6" marginLeft="20" color="inherit" className={classes.grow}>
                        GIVE FEEDBACK
                    </Typography>
                  <IconButton variant="h6" marginLeft="20" color="inherit" className={classes.grow}
                  
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu 
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} 
                    transformOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                    {
                      this.props.isAuthenticated ?
                      <MenuItem onClick={this.handleClose}>Signout</MenuItem> :
                      <MenuItem onClick={this.handleClose}>Login</MenuItem>
                    }
                  </Menu>
                </RightContainer>
              )}
            </Toolbar>
          </AppBar>
          {this.props.children}
        </div>
      );
    }}
  
  MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MenuAppBar);