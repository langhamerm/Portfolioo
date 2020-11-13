import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import image from "../images/Markss.jpg";

const styles = {
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  },
  bigAvatar: {
    marginLeft: 100,
    width: 200,
    height: 200,
    border: '1px solid black'
  },
  name: {
    fontFamily: 'Sitka Heading',
    fontSize: '3em',
    textShadow: '1px 1px silver',
    fontWeight: 'bold'
  },
  dev:{
    fontFamily: 'Sitka Subheading',
    fontSize: '0.75em',
    textShadow: '1px 1px silver',
    marginLeft: '1em'
  },
  loc:{
    fontFamily: 'Sitka Subheading',
    fontSize: '0.5em',
    textShadow: '1px 1px silver',
    marginLeft: '3em'
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="left" alignItems="left">
 
      <Avatar alt="Mark Langhamer" src={image} className={classes.bigAvatar} />
    <h1 className={classes.name}>Mark Langhamer Jr.
    <br/>
        <span className={classes.dev}>Full Stack Developer</span>
        <br/>
        <span className={classes.loc}>Chicago, IL</span>
    </h1>


    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);