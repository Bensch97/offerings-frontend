import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled, { css } from 'styled-components';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
    height: '75vh',
    flexWrap: 'nowrap',
    marginTop: '10%',
    marginBottom: '10%',
    alignContent: 'space-between',
  },
  cardChildren: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
});

// This is to be converted to an upload image area, is now purely stylistic
const ImageDrop = styled.div`
    background: #F5F5F5;
    width: 100vw;
    height: 20vh;
`
function MaterialIcon(props) {
  return (
    <i class='material-icons'>
      {props.icon}
    </i>
  )
}


function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props.theme)

  return (
  <div className={classes.cardContainer}>
    <Card className={classes.card}>
        <MaterialIcon icon='insert_photo'/>
      <ImageDrop>
      </ImageDrop>
      <CardContent className={classes.cardChildren}>
        <TextField
        defaultValue="Title"
        className={classes.textField}
            />
        <TextField
        defaultValue="Address"
        className={classes.textField}
            />
        <TextField
        defaultValue="Description"
        className={classes.textField}
        variant='outlined'
            />
        <p className={classes.textField}>Make sure to include quantity e.g. 50 lbs, 20 ct</p>
      </CardContent>
      <CardActions>
      <Button
        variant="contained"
        color="primary"
        className={classes.bootstrapRoot}
      >
        Create Post
      </Button>
      </CardActions>
    </Card>
  </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);