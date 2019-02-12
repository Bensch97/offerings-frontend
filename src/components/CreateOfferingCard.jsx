import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import DropzoneWithPreview from './Dropzone'

const styles = theme => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60vw',
    height: '75vh',
    flexWrap: 'nowrap',
    marginTop: '10%',
    marginBottom: '10%',
    alignContent: 'space-between',
  },
  cardChildren: {
    marginTop: '3vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  textField: {
    width: '90%',
    marginBottom: '5vh'
  },
  textBox: {
    width: '90%'
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
  text: {
    marginBottom: '10%',
  }
});

// This is to be converted to an upload image area, is now purely stylistic
const ImageDrop = styled.div`
    background: #F5F5F5;
    width: 100vw;
    height: 50%;
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function SimpleCard(props) {
  const { classes } = props;

  return (
  <div className={classes.cardContainer}>
    <Card className={classes.card}>
      <DropzoneWithPreview />
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
        className={classes.textBox}
        variant='outlined'
            />
        <p className={classes.text}>Make sure to include quantity e.g. 50 lbs, 20 ct</p>
      <Button
        variant="contained"
        color="primary"
        className={classes.bootstrapRoot}
      >
        Create Post
      </Button>
      </CardContent>
    </Card>
  </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);