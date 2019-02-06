import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    minWidth: 275,
    height: '40%',
    marginTop: '5vh',
    marginLeft: '10%',
    marginRight: '10%'
  },
  title: {
    fontSize: 24,
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1vh',
    marginBottom: '5vh',
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
      width: '60vw',
      marginBottom: '15%',
  },
  bootstrapRoot: {
    display: 'flex',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    width: '25vw',
    height: '5vh',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'Green',
    borderColor: 'Green',
  },
  ButtonContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
  }
};

class LoginCard extends React.Component {

  render () { 
    return (
      <Card className={this.props.card}>
          <Typography className={this.props.title} color="textSecondary" gutterBottom>
            Log in to Offerings
          </Typography>
          <br />
          <form>
              <TextField onChange={ this.props.handleInputChange } id="username" defaultValue="Username" className={this.props.textField}/>
              <br />
              <TextField onChange={ this.props.handleInputChange } id="password" defaultValue="Password" className={this.props.textField}/>
          </form>
        <CardActions>
      <div className={this.props.ButtonContainer}>
        <Button onClick={ this.props.handleLogin } variant="contained" color="primary" className={this.props.bootstrapRoot} >
          Login
        </Button>
        <br />
        <a href='/signup'>Don't have an account? Sign up!</a>
      </div>
        </CardActions>
      </Card>
    );
  }
}

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginCard);