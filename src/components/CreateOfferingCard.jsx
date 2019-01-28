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
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    marginBottom: '10%',
    marginTop: '10%',
    marginLeft: '20%',
    marginRight: '20%',
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
});

const ImageDrop = styled.input`
    display: flex;
    backgroundColor: gray;

`

const TextIn = styled.input

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
          <ImageDrop type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg"/>
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
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);